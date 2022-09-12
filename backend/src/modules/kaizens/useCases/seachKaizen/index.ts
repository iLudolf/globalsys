import { SeachKaizenUseCases } from "./SeachKaizenUseCases";
import { SeachKaizenController } from "./SeachKaizenController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): SeachKaizenController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const seachKaizenUseCases = new SeachKaizenUseCases(postgressAccountsRepository);
    const seachKaizenController = new SeachKaizenController(seachKaizenUseCases);

    return seachKaizenController
};