import { IKaizenRepository, IKaizenDocsDTO } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";
import fs from "fs";
import path from "path";

class ListKaizenDocsUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<IKaizenDocsDTO[]> {
        let kaizensDocs = await this.kaizenRepository.listKaizenDocs(Number(id));    

        return kaizensDocs
    }
}

export { ListKaizenDocsUseCases }