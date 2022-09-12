import { DeleteKaizenPhotoUseCase } from "./DeleteKaizenPhotoUseCase";
import { DeleteKaizenPhotoController } from "./DeleteKaizenPhotoController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): DeleteKaizenPhotoController => {
    const postgressAccountsRepository = new PostgressKaizensRepository();
    const deleteKaizenPhotoUseCase = new DeleteKaizenPhotoUseCase(postgressAccountsRepository);
    const deleteKaizenPhotoController = new DeleteKaizenPhotoController(deleteKaizenPhotoUseCase);

    return deleteKaizenPhotoController
};