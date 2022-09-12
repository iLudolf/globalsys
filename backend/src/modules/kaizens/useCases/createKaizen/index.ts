import { CreateKaizensUseCases } from "./CreateKaizenUseCases";
import { CreateKaizenController } from "./CreateKaizenController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): CreateKaizenController => {
    const postgressKaizensRepository = new PostgressKaizensRepository();
    const createKaizensUseCases = new CreateKaizensUseCases(postgressKaizensRepository);
    const createKaizenController = new CreateKaizenController(createKaizensUseCases);

    return createKaizenController;
};



