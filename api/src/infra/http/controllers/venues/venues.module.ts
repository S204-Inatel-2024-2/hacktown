import { Module } from "@nestjs/common";
import { CreateVenueUseCase } from "src/domain/event/application/use-cases/venues/create.service";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateVenueController } from "./create.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [CreateVenueController],
  providers: [CreateVenueUseCase],
})
export class VenuesModule {}