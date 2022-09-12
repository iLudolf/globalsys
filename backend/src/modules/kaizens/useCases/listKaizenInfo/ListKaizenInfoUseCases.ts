import { IKaizenRepository, IKaizensOverviewDTO } from "../../repositories/IKaizensRepository";

class ListKaizenInfoUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<IKaizensOverviewDTO[]> {

        let kaizen = await this.kaizenRepository.listKaizen(Number(id));

        return kaizen
    }
}

export { ListKaizenInfoUseCases }