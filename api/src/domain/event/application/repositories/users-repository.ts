import { User } from "mongo/schema/user";
import { Types } from "mongoose";

export interface UpdateUser {
  email: string;
  username: string;
  event: Types.ObjectId;
}

export abstract class UsersRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findByRole(role: string): Promise<User[]>;
  abstract create(user: User): Promise<User>;
  abstract update(user: UpdateUser): Promise<User>;
  abstract delete(id: string): void;
  abstract list(): Promise<User[]>;
}