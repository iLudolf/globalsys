import { MemoryUsageCasesUseCases } from "./MemoryUsageCases";
import { MemoryUsageController } from "./memoryUsageController";
import { SistemInfoRepository } from "../../repositories/SistemInfoRepository";

export default (): MemoryUsageController => {

    const sistemInfoRepository = new SistemInfoRepository();
    const memoryUsageCasesUseCases = new MemoryUsageCasesUseCases(sistemInfoRepository);
    const memoryUsageController = new MemoryUsageController(memoryUsageCasesUseCases);

    return memoryUsageController;
};