import { EmailSender } from "../domain/email-sender";
import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string) {
    console.log("User", userId);
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error(`user id not found ${userId}`);
    }

    await this.emailSender.send(user.email, "Welcome to our application");
  }
}
