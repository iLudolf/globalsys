import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";
import { SendForgotPasswordMailController } from "./SendForgotPasswordMailController";
import { PostgressAccountsRepository } from "../../repositories/PostgressAccountsRepository";

export default (): SendForgotPasswordMailController => {
    const postgressAccountsRepository = new PostgressAccountsRepository();
    const sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(postgressAccountsRepository);
    const sendForgotPasswordMailController = new SendForgotPasswordMailController(sendForgotPasswordMailUseCase);

    return sendForgotPasswordMailController
};