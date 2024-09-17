import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "mongo/schema/user";
import { UsersRepository } from "src/domain/event/application/repositories/users-repository";
import { MongoUsersRepository } from "./mongo/repositories/mongo-users-repository";

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'User',
    schema: UserSchema,
  }])],
  providers: [{
    provide: UsersRepository,
    useClass: MongoUsersRepository,
  }],
  exports: [
    UsersRepository
  ],
})
export class DatabaseModule {}