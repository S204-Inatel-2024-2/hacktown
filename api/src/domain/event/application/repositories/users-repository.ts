import { User } from "mongo/schema/user";

export abstract class UsersRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findByRole(role: string): Promise<User[]>;
  abstract create(user: User): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: string): void;
  abstract list(): Promise<User[]>;
}