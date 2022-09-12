import { IKaizenRepository, IKaizensOverviewDTO } from "../../repositories/IKaizensRepository";

class ListKaizenOverviewUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<IKaizensOverviewDTO[]> {

        let kaizen = await this.kaizenRepository.listKaizenOverview(Number(id))
        
        return kaizen
    }
}

export { ListKaizenOverviewUseCases }