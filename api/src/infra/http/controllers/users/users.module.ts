import { Module } from "@nestjs/common";
import { CryptographyModule } from "src/infra/cryptography/cryptography.module";
import { DatabaseModule } from "src/infra/database/database.module";
import { AuthenticateController } from "./authenticate.controller";
import { AuthenticateUseCase } from "src/domain/event/application/use-cases/users/authenticate.service";
import { CreateController } from "./create.controller";
import { CreateUseCase } from "src/domain/event/application/use-cases/users/create.service";
import { ListController } from "./list.controller";
import { ListUseCase } from "src/domain/event/application/use-cases/users/list.service";

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [AuthenticateController, CreateController, ListController],
  providers: [AuthenticateUseCase, CreateUseCase, ListUseCase],
})
export class UsersModule {}