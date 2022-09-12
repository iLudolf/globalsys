import { UpdatePermissionsUseCases } from "./UpdatePermissionsUseCases";
import { UpdatePermissionsController } from "./UpdatePermissionsController";
import { PostgressPermissionsRepository } from "../../repositories/PostgressPermissionsRepository";

export default (): UpdatePermissionsController => {

    const postgressPermissionsRepository = new PostgressPermissionsRepository();
    const updatePermissionsUseCases = new UpdatePermissionsUseCases(postgressPermissionsRepository);
    const updatePermissionsController = new UpdatePermissionsController(updatePermissionsUseCases);

    return updatePermissionsController;
};