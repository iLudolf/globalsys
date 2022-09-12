import { UpdateAccountsUseCase } from "./UpdateAccountsUseCase";
import { UpdateAccountsController } from "./UpdateAccountsController";
import { PostgressAccountsRepository } from "../../repositories/PostgressAccountsRepository";

export default (): UpdateAccountsController => {

    const postgressAccountsRepository = new PostgressAccountsRepository();
    const updateAccountsUseCase = new UpdateAccountsUseCase(postgressAccountsRepository);
    const updateAccountsController = new UpdateAccountsController(updateAccountsUseCase);

    return updateAccountsController;
};