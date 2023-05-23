import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

const users: User[] = [
  {
    id: "1",
    email: "manuperegrino1@gmail.com",
  },
  {
    id: "2",
    email: "pepe1@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userID: string): Promise<User | null> {
    const user = users.find((user) => user.id === userID);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
