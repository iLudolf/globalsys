import { Request, Response } from "express";
import { ListPermissionsUseCases } from "./ListPermissionsUseCases";

class ListPermissionsController {
    constructor(private listPermissionsUseCases: ListPermissionsUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            id
        } = req.params;


        let isExist = await this.listPermissionsUseCases.execute(Number(id));       

        if (isExist) {
            res.status(200).json({
                error: false,
                message: isExist
            });

        } else {
            res.status(200).json({
                error: true,
                message: `No momemento nao foi possivel carregar as permissäoes.`
            });
        }

    }
}

export { ListPermissionsController };