import { Request, Response } from "express";
import { ListSecurityUseCases } from "./ListSecurityUseCases";

class ListSecurityController {
    constructor(private listSecurityUseCases: ListSecurityUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            id
        } = req.params;


        let isExist = await this.listSecurityUseCases.execute(Number(id));

        if (isExist) {
            res.status(200).json({
                error: false,
                message: isExist
            });

        } else {
            res.status(200).json({
                error: true,
                message: `No momemento nao foi possivel carregar os grupos.`
            });
        }

    }
}

export { ListSecurityController };