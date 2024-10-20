import { Controller, Get } from "@nestjs/common";
import { ListUseCase } from "src/domain/event/application/use-cases/users/list.service";
import { Public } from "src/infra/auth/public";

@Controller('/users')
export class ListController {
  constructor(private listUseCase: ListUseCase) {}

  @Get()
  async handle() {
    const result = await this.listUseCase.execute()

    const { users } = result

    return {
      users,
    }
  }
}