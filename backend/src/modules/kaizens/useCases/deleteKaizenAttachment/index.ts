import { DeleteKaizenAttachmenUseCase } from "./DeleteKaizenAttachmentUseCase";
import { DeleteKaizenAttachmentController } from "./DeleteKaizenAttachmentController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): DeleteKaizenAttachmentController => {
    const postgressAccountsRepository = new PostgressKaizensRepository();
    const deleteKaizenAttachmenUseCase = new DeleteKaizenAttachmenUseCase(postgressAccountsRepository);
    const deleteKaizenAttachmentController = new DeleteKaizenAttachmentController(deleteKaizenAttachmenUseCase);

    return deleteKaizenAttachmentController
};