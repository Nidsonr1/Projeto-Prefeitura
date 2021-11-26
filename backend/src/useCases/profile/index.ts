import { UserRepository } from "../../repositories/UserRepository"
import { ProfileController } from "./ProfileController";
import { ProfileUseCase } from "./ProfileUseCase";


export default() => {
  const userRepository = new UserRepository();
  const profileUseCase = new ProfileUseCase(userRepository);
  const profileController = new ProfileController(profileUseCase);
  
  return profileController;
}