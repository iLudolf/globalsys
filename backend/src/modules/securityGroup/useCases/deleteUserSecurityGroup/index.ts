import { DeleteUserSecurityGroupCases } from "./DeleteUserSecurityGroupCases";
import { DeleteUserSecurityGroupController } from "./DeleteUserSecurityGroupController";
import { PostgressSecurityGroupRepository } from "../../repositories/PostgressSecurityGroupRepository";

export default (): DeleteUserSecurityGroupController => {

    const postgressPermissionsRepository = new PostgressSecurityGroupRepository();
    const deleteUserSecurityGroupCases = new DeleteUserSecurityGroupCases(postgressPermissionsRepository);
    const deleteUserSecurityGroupController = new DeleteUserSecurityGroupController(deleteUserSecurityGroupCases);

    return deleteUserSecurityGroupController;
};