import { ISistemInfoRepository } from "../../repositories/ISistemInfoRepository";

class GetCpuUseCases {
    constructor(private accountRepository: ISistemInfoRepository) { }

    async execute(): Promise<any> {
        const sistemInfogetCpu = await this.accountRepository.getProcessadorInfo();             
        return sistemInfogetCpu        
    }
}

export { GetCpuUseCases };