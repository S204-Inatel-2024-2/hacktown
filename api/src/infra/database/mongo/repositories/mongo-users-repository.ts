import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "mongo/schema/user";
import { Model } from "mongoose";
import { UsersRepository } from "src/domain/event/application/repositories/users-repository";

@Injectable()
export class MongoUsersRepository implements UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  findByRole(role: string): Promise<User[]> {
    return this.userModel.find({ role }).exec();
  }

  create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  update(user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(user._id, user, { new: true }).exec();
  }

  delete(id: string): void {
    this.userModel.findByIdAndDelete(id).exec();
  }

  list(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}