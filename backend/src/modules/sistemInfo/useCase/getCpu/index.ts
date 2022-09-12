import { GetCpuUseCases } from "./getCpuUseCases";
import { GetCpuController } from "./getCpuController";
import { SistemInfoRepository } from "../../repositories/SistemInfoRepository";

export default (): GetCpuController => {

    const sistemInfoRepository = new SistemInfoRepository();
    const getCpuUseCases = new GetCpuUseCases(sistemInfoRepository);
    const getCpuController = new GetCpuController(getCpuUseCases);

    return getCpuController;
};