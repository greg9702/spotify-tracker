import { userRepository } from "../domain/user";
import { User } from "../domain/user/user";

export async function getUserProfileUseCase(email: string): Promise<User> {
  const user = await userRepository.getByEmail(email);
  console.log("get email", user);
  return user;
}
