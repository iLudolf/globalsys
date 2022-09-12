import { ListKaizenOverviewUseCases } from "./ListKaizenOverviewUseCases";
import { ListKaizenOverviewController } from "./ListKaizenOverviewController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizenOverviewController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizenOverviewUseCases = new ListKaizenOverviewUseCases(postgressAccountsRepository);
    const listKaizenOverviewController = new ListKaizenOverviewController(listKaizenOverviewUseCases);

    return listKaizenOverviewController
};