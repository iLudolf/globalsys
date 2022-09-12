import { IKaizenRepository, IKaizensDTO } from "../../repositories/IKaizensRepository";
import { storage } from "../../../../shared/storage/storage";
import path from "path";
import { AppError } from "../../../../shared/errors/AppError";
/*
REGRA DE NEGOCIO 
*/
class IncludeTextOverviewUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(
        id: number,
        description: string
    ): Promise<boolean> {

        let recordAlreadyIsExists: boolean = await this.kaizenRepository.findOverviewByID(Number(id))
     
        if (!recordAlreadyIsExists) {
            this.kaizenRepository.includeTextOverview(
                Number(id),
                String(description),
            )
        }{
            this.kaizenRepository.updateTextOverview(
                Number(id),
                String(description),
            )           
        }


        return true
     
    }
}

export { IncludeTextOverviewUseCases };