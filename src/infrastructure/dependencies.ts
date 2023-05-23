import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { InMemoryUserRepository } from "../infrastructure/in-memory-user-repository";
import { UserController } from "../infrastructure/user-controller";
import { FakeEmailSender } from "./fake-email-sender";

const fakeEmailSender = new FakeEmailSender();
const inMemoryUserRepository = new InMemoryUserRepository();
export const welcomeEmailSender = new WelcomeEmailSender(
  inMemoryUserRepository,
  fakeEmailSender
);
export const userController = new UserController(welcomeEmailSender);
