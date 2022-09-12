import { IncludePhotoUseCases } from "./IncludePhotoUseCases";
import { IncludePhotoController } from "./IncludePhotoController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): IncludePhotoController => {
    const postgressKaizensRepository = new PostgressKaizensRepository();
    const includePhotoUseCases = new IncludePhotoUseCases(postgressKaizensRepository);
    const includePhotoController = new IncludePhotoController(includePhotoUseCases);

    return includePhotoController;
};



