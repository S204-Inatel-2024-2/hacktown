import { Module } from "@nestjs/common";
import { CreateVenueUseCase } from "src/domain/event/application/use-cases/venues/create.service";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateVenueController } from "./create.controller";
import { ListVenuesController } from "./list.controller";
import { ListVenuesUseCase } from "src/domain/event/application/use-cases/venues/list.service";

@Module({
  imports: [DatabaseModule],
  controllers: [CreateVenueController, ListVenuesController],
  providers: [CreateVenueUseCase, ListVenuesUseCase],
})
export class VenuesModule {}