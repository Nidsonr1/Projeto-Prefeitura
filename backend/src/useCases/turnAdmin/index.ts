import { UserRepository } from "../../repositories/UserRepository"
import { TurnAdminController } from "./TurnAdminController";
import { TurnAdminUseCase } from "./TurnAdminUseCase";



export default () => {
  const userRepository = new UserRepository();
  const turnAdminUseCase = new TurnAdminUseCase(userRepository);
  const turnAdminController = new TurnAdminController(turnAdminUseCase);

  return turnAdminController;
}