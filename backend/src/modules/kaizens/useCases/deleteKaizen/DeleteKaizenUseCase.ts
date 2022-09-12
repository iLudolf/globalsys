import { IKaizenRepository } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";
import path from "path";
import { storage as filesystem } from "../../../../shared/storage/storage";


class DeleteKaizenUseCase {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number): Promise<boolean> {

        const kaizenAlreadyExists = await this.kaizenRepository.findByID(id);

        if (!kaizenAlreadyExists) {
            return false;
        }

        let storage = await this.kaizenRepository.delete(id);

        let directory: string = path.join(__dirname + `../../../../../data/storage/kaizen/${storage[0].folder_directory}`);
        await filesystem.removeFolder(directory.trim());
        
        return true
    }
}

export { DeleteKaizenUseCase };