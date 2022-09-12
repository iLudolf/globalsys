import { IKaizenRepository } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";


class ListKaizenUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute( category?: string): Promise<Kaizens[]>{
        return await this.kaizenRepository.list(category);
    }
}

export { ListKaizenUseCases }