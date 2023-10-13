import { userRepository } from "../domain/user";
import { User } from "../domain/user/user";

export async function addUserUseCase(email: string): Promise<void> {
  const user = new User(email);
  await userRepository.save(user);
  return null;
}
