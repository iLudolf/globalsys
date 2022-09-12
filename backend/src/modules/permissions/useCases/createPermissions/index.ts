import { CreatePermissionsUseCases } from "./CreatePermissionsUseCases";
import { CreatePermissionsController } from "./CreatePermissionsController";
import { PostgressPermissionsRepository } from "../../repositories/PostgressPermissionsRepository";

export default (): CreatePermissionsController => {

    const postgressPermissionsRepository = new PostgressPermissionsRepository();
    const createPermissionsUseCases = new CreatePermissionsUseCases(postgressPermissionsRepository);
    const createPermissionsController = new CreatePermissionsController(createPermissionsUseCases);

    return createPermissionsController;
};