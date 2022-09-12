import { IKaizenRepository, IKaizensInfoDTO } from "../../repositories/IKaizensRepository";

class SeachKaizenUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(value: string, category: string): Promise<IKaizensInfoDTO[]> {

        let kaizen = await this.kaizenRepository.seachKaizen(value, category);
        return kaizen
    }
}

export { SeachKaizenUseCases }