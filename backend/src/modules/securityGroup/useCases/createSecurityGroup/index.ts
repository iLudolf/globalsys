import { CreateSecurityGroupUseCases } from "./CreateSecurityGroupUseCases";
import { CreateSecurityGroupController } from "./CreateSecurityGroupController";
import { PostgressSecurityGroupRepository } from "../../repositories/PostgressSecurityGroupRepository";

export default (): CreateSecurityGroupController => {

    const postgressPermissionsRepository = new PostgressSecurityGroupRepository();
    const createSecurityGroupUseCases = new CreateSecurityGroupUseCases(postgressPermissionsRepository);
    const createSecurityGroupController = new CreateSecurityGroupController(createSecurityGroupUseCases);

    return createSecurityGroupController;
};