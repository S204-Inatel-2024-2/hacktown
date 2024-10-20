import { BadRequestException, Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateVenueUseCase } from "src/domain/event/application/use-cases/venues/create.service";
import { z } from "zod";
import { ZodValidationPipe } from "../../pipes/zod-validation.pipe";
import { Types } from "mongoose";

const createBodySchema = z.object({
  name: z.string(),
  address: z.string(),
  capacity: z.number().optional(),
  event: z.string(),
})

type CreateBodySchema = z.infer<typeof createBodySchema>

@Controller('/venue')
export class CreateVenueController {
  constructor(private createUseCase: CreateVenueUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createBodySchema))
  async handle(@Body() body: CreateBodySchema) {
    const { name, address, capacity, event } = body

    const result = await this.createUseCase.execute({
      name,
      address,
      capacity,
      event: new Types.ObjectId(event),
    })

    if (result.isLeft()) {
      const error = result.value

      throw new BadRequestException(error.message)
    }

    const { venue } = result.value

    return {
      venue,
    }
  }
}