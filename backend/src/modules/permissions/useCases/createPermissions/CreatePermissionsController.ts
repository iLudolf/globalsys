import { Request, Response } from "express";
import { CreatePermissionsUseCases } from "./CreatePermissionsUseCases";

class CreatePermissionsController {
    constructor(private createPermissionsUseCases: CreatePermissionsUseCases) { }

    async handle(req: Request, res: Response) {
        const {
            title,
            description,
            permissionGroups,
            categories,
            authorizationsCategories,
            dashboard,
            expenses,
            listVehicles,
            registerVehicles,
            userAdministration
        } = req.body;

        const { userID } = req;


        let permissionsWasCreated = await this.createPermissionsUseCases.execute({
            title,
            description,
            permissionGroups,
            categories,
            authorizationsCategories,
            dashboard,
            expenses,
            listVehicles,
            registerVehicles,
            userAdministration,
            userID
        });   


        if (!permissionsWasCreated) {
            res.status(200).json({
                error: true,
                message: `Já existe uma grupo com o nome ${title} cadastrada. Por favor, verifique e tente novamente!`
            });

        } else {
            res.status(200).json({
                error: false,
                message: `Grupo ${title}, foi criado com sucesso.`
            });
        }

    }
}

export { CreatePermissionsController };