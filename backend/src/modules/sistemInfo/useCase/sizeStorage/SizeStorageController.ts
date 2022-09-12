import { AppError } from "../../../../errors/AppError";
import { SizeStorageUseCases } from "./SizeStorageUseCases";

class SizeStorageController {
    constructor(private sistemInfoUseCase: SizeStorageUseCases) { }

    async handle(socket: any): Promise<any> {
        setInterval(async () => {
            let size = await this.sistemInfoUseCase.execute();
            return socket.emit("storage", {
                size,
                date: new Date()
            });
        }, 5550)

    }
};

export { SizeStorageController };