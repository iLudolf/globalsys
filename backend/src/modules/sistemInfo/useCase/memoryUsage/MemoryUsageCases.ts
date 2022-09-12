import { ISistemInfoRepository } from "../../repositories/ISistemInfoRepository";

class MemoryUsageCasesUseCases {
    constructor(private accountRepository: ISistemInfoRepository) { }

   async execute(): Promise<any> {
        const sistemInfogetCpu = await this.accountRepository.MemoryUsage();             
        return sistemInfogetCpu;        
    }
}

export { MemoryUsageCasesUseCases };