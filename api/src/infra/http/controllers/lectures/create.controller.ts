import { BadRequestException, Body, Controller, Post, UsePipes } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../../pipes/zod-validation.pipe";
import { CreateLectureUseCase } from "src/domain/event/application/use-cases/lectures/create.service";

const createBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  capacity: z.string().transform((value) => parseInt(value, 10)),
  startDate: z.string(),
  endDate: z.string(),
})

type CreateBodySchema = z.infer<typeof createBodySchema>

@Controller('/lecture')
export class CreateLectureController {
  constructor(private createUseCase: CreateLectureUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createBodySchema))
  async handle(@Body() body: CreateBodySchema) {
    const { name, description, location, capacity, startDate, endDate } = body

    const result = await this.createUseCase.execute({
      name,
      description,
      location,
      capacity,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    })

    if (result.isLeft()) {
      const error = result.value

      throw new BadRequestException(error.message)
    }

    const { lecture } = result.value

    return {
      lecture,
    }
  }
}