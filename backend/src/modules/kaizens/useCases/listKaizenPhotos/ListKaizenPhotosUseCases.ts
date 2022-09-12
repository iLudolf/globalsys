import { IKaizenRepository, IKaizenPhotosDTO } from "../../repositories/IKaizensRepository";

class ListKaizenPhotosUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<IKaizenPhotosDTO[]> {
        let kaizen = await this.kaizenRepository.listKaizenPhotos(Number(id));   
        return kaizen
    }
}

export { ListKaizenPhotosUseCases }