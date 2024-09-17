import { Either, left, right } from "src/core/either";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../../repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { HashGenerator } from "../../cryptography/hash-generator";
import { User } from "mongo/schema/user";
import { Types } from "mongoose";

type CreateUseCaseRequest = User;

type CreateUseCaseResponse = Either<
  UserAlreadyExistsError, 
  {
    user: User;
  }
>

@Injectable()
export class CreateUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({ username, email, password, role = "participant", registrationDate }: CreateUseCaseRequest): Promise<CreateUseCaseResponse> {
    const doesUserExists = await this.usersRepository.findByEmail(email)

    if (doesUserExists) {
      return left(new UserAlreadyExistsError())
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const user = await this.usersRepository.create({
      _id: new Types.ObjectId(),
      username,
      email,
      password: hashedPassword,
      role,
      registrationDate,
    })

    return right({
      user,
    })
  }
}