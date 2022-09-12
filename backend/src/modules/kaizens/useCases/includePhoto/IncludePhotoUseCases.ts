import { IKaizenRepository, IKaizensDTO } from "../../repositories/IKaizensRepository";
import { storage } from "../../../../shared/storage/storage";
import path from "path";
import { AppError } from "../../../../shared/errors/AppError";
import sizeOf from 'image-size';
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
    folderDirectory: string;
}

class IncludePhotoUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(id: number, file: File): Promise<boolean> {

        // let recordAlreadyIsExists: boolean = await this.kaizenRepository.findOverviewByID(Number(id))

        if (!Boolean(file)) {
            return false
        }

        let infoKaizen = await this.kaizenRepository.listKaizen(Number(id));
        let directory: string = path.join(__dirname + `../../../../../data/storage/kaizen/${infoKaizen[0].folder_directory}`);

        var dimensions = sizeOf(file.path);
        let imageWidth: string = String(dimensions.width);
        let imageHeight: string = String(dimensions.height);
        //Mover arquivo 
        await storage.moveFile(file!.path, `${directory}/${file!.filename}`);

        file!.path = `storage/kaizen/${infoKaizen[0].folder_directory}/${file!.filename}`;

        this.kaizenRepository.includePhoto(
            Number(id),
            file,
            imageWidth,
            imageHeight
        )

        return true

    }
}

export { IncludePhotoUseCases };