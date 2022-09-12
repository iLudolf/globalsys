import { SizeStorageUseCases } from "./SizeStorageUseCases";
import { SizeStorageController } from "./SizeStorageController";
import { SistemInfoRepository } from "../../repositories/SistemInfoRepository";

export default (): SizeStorageController => {

    const sistemInfoRepository = new SistemInfoRepository();
    const sizeStorageUseCases = new SizeStorageUseCases(sistemInfoRepository);
    const sizeStorageController = new SizeStorageController(sizeStorageUseCases);

    return sizeStorageController;
};