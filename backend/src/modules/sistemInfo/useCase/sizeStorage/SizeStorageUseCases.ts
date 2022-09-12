import { ISistemInfoRepository } from "../../repositories/ISistemInfoRepository";

class SizeStorageUseCases {
    constructor(private sistemInfoRepository: ISistemInfoRepository) { }

    async execute(): Promise<number> {

        const sistemInfoSizeStorage = await this.sistemInfoRepository.checkSizeStorage();     

        return sistemInfoSizeStorage
    }
}

export { SizeStorageUseCases };