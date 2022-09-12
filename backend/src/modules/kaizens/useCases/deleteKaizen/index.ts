import { DeleteKaizenUseCase } from "./DeleteKaizenUseCase";
import { DeleteKaizensController } from "./DeleteKaizenController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): DeleteKaizensController => {
    const postgressAccountsRepository = new PostgressKaizensRepository();
    const deleteKaizenUseCase = new DeleteKaizenUseCase(postgressAccountsRepository);
    const deleteKaizensController = new DeleteKaizensController(deleteKaizenUseCase);

    return deleteKaizensController
};