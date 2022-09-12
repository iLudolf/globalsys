import { Request, Response } from "express";
import { DeleteUserSecurityGroupCases } from "./DeleteUserSecurityGroupCases";

class DeleteUserSecurityGroupController {
    constructor(private deleteUserSecurityGroupCases: DeleteUserSecurityGroupCases) { }

    async handle(req: Request, res: Response) {
        
        const groupControlsID = Number(req.params.groupControlsID);
        const userID = Number(req.params.userID);

        let CreateSecurityCreated = await this.deleteUserSecurityGroupCases.execute({
            groupControlsID,
            userID
        });


        if (!CreateSecurityCreated) {
            res.status(200).json({
                error: true,
                message: `Usuário não encontrado, não possivel remover o usuário da grupo informado.`
            });

        } else {
            res.status(200).json({
                error: false,
                message: `Usuário removido do grupo.`
            });
        }

    }
}

export { DeleteUserSecurityGroupController };