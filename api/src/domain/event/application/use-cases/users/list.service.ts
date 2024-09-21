import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../../repositories/users-repository";
import { User } from "mongo/schema/user";

type ListUseCaseResponse = {
  users: User[];
}

@Injectable()
export class ListUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute(): Promise<ListUseCaseResponse> {
    const users = await this.usersRepository.list()

    return {
      users,
    }
  }
}