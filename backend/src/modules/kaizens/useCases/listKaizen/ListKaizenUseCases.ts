import { IKaizenRepository, IKaizensOverviewDTO } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";


class ListKaizenUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<IKaizensOverviewDTO[]> {

        let kaizen = await this.kaizenRepository.listKaizen(Number(id));
        return kaizen
    }
}

export { ListKaizenUseCases }