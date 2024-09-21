import { BadRequestException, Body, ConflictException, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateUseCase } from "src/domain/event/application/use-cases/users/create.service";
import { Public } from "src/infra/auth/public";
import { z } from "zod";
import { ZodValidationPipe } from "../../pipes/zod-validation.pipe";
import { UserAlreadyExistsError } from "src/domain/event/application/use-cases/users/errors/user-already-exists-error";

const createBodySchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "organizer", "staff_leader", "staff", "speaker", "participant"]).optional(),
})

type CreateBodySchema = z.infer<typeof createBodySchema>

@Controller('/register')
@Public()
export class CreateController {
  constructor(private createUseCase: CreateUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createBodySchema))
  async handle(@Body() body: CreateBodySchema) {
    const { username, email, password, role } = body

    console.log(body)

    const result = await this.createUseCase.execute({
      username,
      email,
      password,
      role,
      registrationDate: new Date(),
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case UserAlreadyExistsError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }

    const { user } = result.value

    return {
      user,
    }
  }
}