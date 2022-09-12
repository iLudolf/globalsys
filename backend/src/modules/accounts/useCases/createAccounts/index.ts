import { CreateAccountsUseCases } from "./CreateAccountsUseCases";
import { CreateAccountsController } from "./CreateAccountsController";
import { PostgressAccountsRepository } from "../../repositories/PostgressAccountsRepository";

export default (): CreateAccountsController => {
    const postgressAccountsRepository = new PostgressAccountsRepository();
    const createAccountsUseCases = new CreateAccountsUseCases(postgressAccountsRepository);
    const createAccountsController = new CreateAccountsController(createAccountsUseCases);

    return createAccountsController;
};



