import { ListKaizenPhotosUseCases } from "./ListKaizenPhotosUseCases";
import { ListKaizenPhotosController } from "./ListKaizenPhotosController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): ListKaizenPhotosController => {

    const postgressAccountsRepository = new PostgressKaizensRepository();
    const listKaizenPhotosUseCases = new ListKaizenPhotosUseCases(postgressAccountsRepository);
    const listKaizenPhotosController = new ListKaizenPhotosController(listKaizenPhotosUseCases);

    return listKaizenPhotosController
};