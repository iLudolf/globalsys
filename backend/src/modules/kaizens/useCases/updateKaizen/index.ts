import { UpdateKaizensUseCase } from "./UpdateKaizenUseCase";
import { UpdateKaizensController } from "./UpdateKaizenController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): UpdateKaizensController => {

    const postgressKaizensRepository = new PostgressKaizensRepository();
    const updateKaizensUseCase = new UpdateKaizensUseCase(postgressKaizensRepository);
    const updateKaizensController = new UpdateKaizensController(updateKaizensUseCase);

    return updateKaizensController;
};