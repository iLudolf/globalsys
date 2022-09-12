import { IncludeAttachmentsUseCases } from "./IncludeAttachmentsUseCases";
import { IncludeAttachmentsController } from "./IncludeAttachmentsController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): IncludeAttachmentsController => {
    const postgressKaizensRepository = new PostgressKaizensRepository();
    const includeAttachmentsUseCases = new IncludeAttachmentsUseCases(postgressKaizensRepository);
    const includeAttachmentsController = new IncludeAttachmentsController(includeAttachmentsUseCases);

    return includeAttachmentsController;
};



