import { ListKaizenDocsUseCases } from "./ListKaizenDocsUseCases";
import { ListKaizenDocsController } from "./ListKaizenDocsController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizenDocsController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizenDocsUseCases = new ListKaizenDocsUseCases(postgressAccountsRepository);
    const listKaizenDocsController = new ListKaizenDocsController(listKaizenDocsUseCases);

    return listKaizenDocsController
};