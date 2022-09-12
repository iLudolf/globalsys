import { IncludeTextOverviewUseCases } from "./IncludeTextOverviewUseCases";
import { IncludeTextOverviewController } from "./IncludeTextOverviewController";
import { PostgressKaizensRepository } from "../../repositories/PostgressKaizensRepository";

export default (): IncludeTextOverviewController => {
    const postgressKaizensRepository = new PostgressKaizensRepository();
    const includeTextOverviewUseCases = new IncludeTextOverviewUseCases(postgressKaizensRepository);
    const includeTextOverviewController = new IncludeTextOverviewController(includeTextOverviewUseCases);

    return includeTextOverviewController;
};



