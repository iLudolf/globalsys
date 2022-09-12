import { Request, Response } from "express";
import { UpdateSecurityUseCases } from "./UpdateSecurityUseCases";

class CreateSecurityController {
    constructor(private updateSecurityUseCases: UpdateSecurityUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            id,
            groupControlsID
        } = req.body;

        const { userID } = req;


        let permissionsWasUpdate = await this.updateSecurityUseCases.execute({
            id,
            groupControlsID,
            userID
        });


        if (!permissionsWasUpdate) {
            res.status(200).json({
                error: true,
                message: `No momento não foi possivel atualizar o grupo. Por favor, verifique e tente novamente!`
            });

        } else {
            res.status(200).json({
                error: false,
                message: `Grupo, foi atualizado com sucesso.`
            });
        }

    }
}

export { CreateSecurityController };