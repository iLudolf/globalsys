import { ListAccountsUseCases } from "./ListAccountsUseCases";
import { ListAccountsController } from "./ListAccountsController";
import { PostgressAccountsRepository } from "../../repositories/PostgressAccountsRepository";

export default (): ListAccountsController => {


    const postgressAccountsRepository = new PostgressAccountsRepository();
    const listAccountsUseCases = new ListAccountsUseCases(postgressAccountsRepository);
    const listAccountsController = new ListAccountsController(listAccountsUseCases);

    return listAccountsController
};