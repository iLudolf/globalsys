import { IKaizenRepository, IKaizensDTO } from "../../repositories/IKaizensRepository";
import { storage } from "../../../../shared/storage/storage";
import path from "path";
import { AppError } from "../../../../shared/errors/AppError";
/*
REGRA DE NEGOCIO 
*/

interface File {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
    folderName?: string;
    folderDirectory?: string;
}

class IncludeAttachmentsUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number, file: File): Promise<boolean> {

        // let recordAlreadyIsExists: boolean = await this.kaizenRepository.findOverviewByID(Number(id))

        if (!Boolean(file)) {
            return false
        }

        let infoKaizen = await this.kaizenRepository.listKaizen(Number(id));
        let directory: string = path.join(__dirname + `../../../../../data/storage/kaizen/${infoKaizen[0].folder_directory}`);

        //Mover arquivo 
        await storage.moveFile(file!.path, `${directory}/${file!.filename}`);

        file!.path = `storage/kaizen/${infoKaizen[0].folder_directory}/${file!.filename}`;

        this.kaizenRepository.includeAttachments(
            Number(id),
            file
        )

        return true

    }
}

export { IncludeAttachmentsUseCases };