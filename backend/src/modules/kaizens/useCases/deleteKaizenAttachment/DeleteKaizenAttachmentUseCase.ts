import { IKaizenRepository } from "../../repositories/IKaizensRepository";
import { Kaizens } from "../../entities/Kaizens";
import path from "path";
import { storage as filesystem } from "../../../../shared/storage/storage";


class DeleteKaizenAttachmenUseCase {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(kaizenId: number, docId: number): Promise<boolean> {

        const kaizenAlreadyExists = await this.kaizenRepository.findByID(kaizenId);

        if (!kaizenAlreadyExists) {
            return false;
        }

        let storage = await this.kaizenRepository.deleteAttachment(docId);

        let directory: string = path.join(__dirname + `../../../../../data/${storage[0].doc_path}`);
        await filesystem.removeFile(directory.trim());

        return true
    }
}

export { DeleteKaizenAttachmenUseCase };