import { ListUsersNotExistSecurityGroupUseCases } from "./listUsersNotExistSecurityGroupUseCases";
import { ListUsersNotExistSecurityGroupController } from "./listUsersNotExistSecurityGroupController";
import { PostgressSecurityGroupRepository } from "../../repositories/PostgressSecurityGroupRepository";

export default (): ListUsersNotExistSecurityGroupController => {

    const postgressSecurityGroupRepository = new PostgressSecurityGroupRepository();
    const listUsersNotExistSecurityGroupUseCases = new ListUsersNotExistSecurityGroupUseCases(postgressSecurityGroupRepository);
    const listUsersNotExistSecurityGroupController = new ListUsersNotExistSecurityGroupController(listUsersNotExistSecurityGroupUseCases);

    return listUsersNotExistSecurityGroupController;
};