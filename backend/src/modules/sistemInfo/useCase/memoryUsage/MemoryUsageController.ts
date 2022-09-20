import { MemoryUsageCasesUseCases } from "./MemoryUsageCases";

class MemoryUsageController {
    constructor(private memoryUsageCases: MemoryUsageCasesUseCases) { }

    async handle(socket: any): Promise<any> {

        let cont = 0;

        setInterval(async () => {
            let usedMemory = await this.memoryUsageCases.execute();
            cont = cont + 1; 
            return socket.emit("totalmem", {
                id: cont,
                memoryUse: (100 - usedMemory)
            });

        }, 1000)
    }
}

export { MemoryUsageController };