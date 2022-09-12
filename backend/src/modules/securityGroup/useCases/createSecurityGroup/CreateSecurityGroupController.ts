import { Request, Response } from "express";
import { CreateSecurityGroupUseCases } from "./CreateSecurityGroupUseCases";

class CreateSecurityGroupController {
    constructor(private createSecurityGroupUseCases: CreateSecurityGroupUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            groupControlsID,
            userID
        } = req.body;


        let CreateSecurityCreated = await this.createSecurityGroupUseCases.execute({
            groupControlsID,
            userID
        });


        if (!CreateSecurityCreated) {
            res.status(200).json({
                error: true,
                message: `Usuário já cadastrado ao grupo informado.`
            });

        } else {
            res.status(200).json({
                error: false,
                message: `Usuário incluído ao grupo.`
            });
        }

    }
}

export { CreateSecurityGroupController };