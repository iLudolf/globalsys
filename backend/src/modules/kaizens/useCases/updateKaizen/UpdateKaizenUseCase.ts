import { IKaizenRepository, IKaizensDTO } from "../../repositories/IKaizensRepository";
import path from "path";
import { storage } from "../../../../shared/storage/storage";

class UpdateKaizensUseCase {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute({
        id,
        userResponsible,
        firstName, lastName,
        date,
        description,
        type,
        office,
        occupation,
        category,
        file
    }: IKaizensDTO): Promise<boolean> {

        const kaizenAlreadyExists = await this.kaizenRepository.findByID(id!);


        if (!kaizenAlreadyExists) {
            return false;
        }

        let infoKaizen = await this.kaizenRepository.listKaizen(Number(id));


        if (!Boolean(file)) {


            await this.kaizenRepository.update({
                id,
                userResponsible,
                firstName,
                lastName,
                date,
                description,
                type,
                office,
                occupation,
                category,
                file: {
                    fieldname: infoKaizen[0].filename,
                    originalname: infoKaizen[0].filename,
                    mimetype: infoKaizen[0].mimetype,
                    filename: infoKaizen[0].filename,
                    path: infoKaizen[0].path,
                    size: Number(infoKaizen[0].size),
                    folderDirectory: infoKaizen[0].folder_directory
                }
            });

        } else {

            let directory: string = path.join(__dirname + `../../../../../data/storage/kaizen/${infoKaizen[0].folder_directory}`);

            //Remover arquivo antigo          
            await storage.removeFile(`${directory}/${infoKaizen[0]!.filename}`);

            //Mover arquivo 
            await storage.moveFile(file!.path, `${directory}/${file!.filename}`);

            file!.path = `storage/kaizen/${infoKaizen[0].folder_directory}/${file!.filename}`;
            file!.folderDirectory = infoKaizen[0].folder_directory;

            await this.kaizenRepository.update({
                id,
                userResponsible,
                firstName,
                lastName,
                date,
                description,
                type,
                office,
                occupation,
                category,
                file
            });
        }


        return true
    }
}

export { UpdateKaizensUseCase };