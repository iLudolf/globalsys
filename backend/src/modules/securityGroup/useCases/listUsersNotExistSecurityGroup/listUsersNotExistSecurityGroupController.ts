import { Request, Response } from "express";
import { ListUsersNotExistSecurityGroupUseCases } from "./listUsersNotExistSecurityGroupUseCases";
import { AppError } from "../../../../errors/AppError";

class ListUsersNotExistSecurityGroupController {
    constructor(private listUsersNotExistSecurityGroupUseCases: ListUsersNotExistSecurityGroupUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            id
        } = req.params;


        let isExist = await this.listUsersNotExistSecurityGroupUseCases.execute(Number(id));


     if(Boolean(isExist.rows)){
        res.status(200).json({
            error: false,
            message: isExist
        });
     }else{
        res.status(200).json({
            error: true,
            message: isExist
        });   
     }       

    }
}

export { ListUsersNotExistSecurityGroupController };