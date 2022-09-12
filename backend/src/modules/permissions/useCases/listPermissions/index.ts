import { ListPermissionsUseCases } from "./ListPermissionsUseCases";
import { ListPermissionsController } from "./ListPermissionsController";
import { PostgressPermissionsRepository } from "../../repositories/PostgressPermissionsRepository";

export default (): ListPermissionsController => {

    const postgressPermissionsRepository = new PostgressPermissionsRepository();
    const listPermissionsUseCases = new ListPermissionsUseCases(postgressPermissionsRepository);
    const listPermissionsController = new ListPermissionsController(listPermissionsUseCases);

    return listPermissionsController;
};