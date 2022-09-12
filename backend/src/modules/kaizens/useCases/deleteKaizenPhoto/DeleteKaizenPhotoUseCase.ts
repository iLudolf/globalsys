import { IKaizenRepository } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";
import path from "path";
import { storage as filesystem } from "../../../../shared/storage/storage";


class DeleteKaizenPhotoUseCase {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(kaizenId: number, photoId: number): Promise<boolean> {

        const kaizenAlreadyExists = await this.kaizenRepository.findByID(kaizenId);

        if (!kaizenAlreadyExists) {
            return false;
        }

        let storage = await this.kaizenRepository.deletePhoto(photoId);

        let directory: string = path.join(__dirname + `../../../../../data/${storage[0].photo_path}`);
        await filesystem.removeFile(directory.trim());

        return true
    }
}

export { DeleteKaizenPhotoUseCase };