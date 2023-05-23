import { User } from "./user";

export interface UserRepository {
  getById(userID: string): Promise<User | null>;
}
