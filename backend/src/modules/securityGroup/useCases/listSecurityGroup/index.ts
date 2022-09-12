import { ListSecurityUseCases } from "./ListSecurityUseCases";
import { ListSecurityController } from "./ListSecurityController";
import { PostgressSecurityGroupRepository } from "../../repositories/PostgressSecurityGroupRepository";

export default (): ListSecurityController => {

    const postgressSecurityGroupRepository = new PostgressSecurityGroupRepository();
    const listSecurityUseCases = new ListSecurityUseCases(postgressSecurityGroupRepository);
    const listSecurityController = new ListSecurityController(listSecurityUseCases);

    return listSecurityController;
};