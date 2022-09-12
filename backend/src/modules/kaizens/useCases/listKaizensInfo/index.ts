import { ListKaizensInfoUseCases } from "./ListKaizenInfoUseCases";
import { ListKaizensInfoController } from "./ListKaizenInfoController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizensInfoController => {
    
    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizensInfoUseCases = new ListKaizensInfoUseCases(postgressAccountsRepository);
    const listKaizensInfoController = new ListKaizensInfoController(listKaizensInfoUseCases);

    return listKaizensInfoController
};