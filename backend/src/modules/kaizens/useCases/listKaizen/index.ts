import { ListKaizenUseCases } from "./ListKaizenUseCases";
import { ListKaizenController } from "./ListKaizenController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizenController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizenUseCases = new ListKaizenUseCases(postgressAccountsRepository);
    const listKaizenController = new ListKaizenController(listKaizenUseCases);

    return listKaizenController
};