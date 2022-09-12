import { ListKaizenInfoUseCases } from "./ListKaizenInfoUseCases";
import { ListKaizenInfoController } from "./ListKaizenInfoController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizenInfoController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizenInfoUseCases = new ListKaizenInfoUseCases(postgressAccountsRepository);
    const listKaizenInfoController = new ListKaizenInfoController(listKaizenInfoUseCases);

    return listKaizenInfoController
};