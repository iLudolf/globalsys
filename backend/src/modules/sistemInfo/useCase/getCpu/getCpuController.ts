import { AppError } from "../../../../errors/AppError";
import { GetCpuUseCases } from "./getCpuUseCases";

class GetCpuController {
    constructor(private sistemInfoUseCase: GetCpuUseCases) { }

    async handle(socket: any): Promise<any> {
        let cpu = await this.sistemInfoUseCase.execute();   
        return socket.emit("cpu", cpu);
    }
}

export { GetCpuController };