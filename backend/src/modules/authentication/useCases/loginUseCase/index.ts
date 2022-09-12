import { LoginAuthenticationUseCase } from "./LoginAuthenticationUseCase";
import { LoginAuthenticationUseController } from "./LoginAuthenticationUseController";
import { PostgressAuthenticationRepository } from "../../repositories/PostgressAuthenticationRepository";

export default (): LoginAuthenticationUseController => {

    const postgressAuthenticationRepository = new PostgressAuthenticationRepository();
    const loginAuthenticationUseCase = new LoginAuthenticationUseCase(postgressAuthenticationRepository);
    const loginAuthenticationUseController = new LoginAuthenticationUseController(loginAuthenticationUseCase);

    return loginAuthenticationUseController;
};