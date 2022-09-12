import { IKaizenRepository, IKaizensDTO } from "../../repositories/IKaizensRepository";
import { storage } from "../../../../shared/storage/storage";
import path from "path";
import { AppError } from "../../../../shared/errors/AppError";
/*
REGRA DE NEGOCIO 
*/
class CreateKaizensUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute({ userResponsible,
        firstName,
        lastName,
        date,
        description,
        office,
        type,
        category,
        occupation,
        file
    }: IKaizensDTO): Promise<boolean> {

        let folderName = `kaizen-${new Date().getTime()}`;
        let directory: string = path.join(__dirname + `../../../../../data/storage/kaizen/${folderName}`);

        //Criar nova pasta
        await storage.createNewStorageSync(directory);

        if (Boolean(file)) {
            //Mover arquivo 
            await storage.moveFile(file!.path, `${directory}/${file!.filename}`);

            file!.path = `storage/kaizen/${folderName}/${file!.filename}`;
            file!.folderDirectory = folderName;

            this.kaizenRepository.create({
                userResponsible,
                firstName,
                lastName,
                date,
                description,
                office,
                type,
                category,
                occupation,
                file
            })

            return true
        }

        this.kaizenRepository.create({
            userResponsible,
            firstName,
            lastName,
            date,
            description,
            office,
            type,
            category,
            occupation,
            file: {
                fieldname: "file",
                originalname: "profile.jpg",
                encoding: "7bit",
                mimetype: "image/jpeg",
                destination: "default",
                filename: "profile.jpg",
                path: "default/profile.jpg",
                size: 40,
                folderDirectory: folderName,
            }
        })

        return true

    }
}

export { CreateKaizensUseCases };