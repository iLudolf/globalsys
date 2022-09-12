import { DeleteAccountsUseCase } from "./DeleteAccountsUseCase";
import { DeleteAccountsController } from "./DeleteAccountsController";
import { PostgressAccountsRepository } from "../../repositories/PostgressAccountsRepository";

export default (): DeleteAccountsController => {
    const postgressAccountsRepository = new PostgressAccountsRepository();
    const deleteAccountsUseCase = new DeleteAccountsUseCase(postgressAccountsRepository);
    const deleteAccountsController = new DeleteAccountsController(deleteAccountsUseCase);

    return deleteAccountsController
};