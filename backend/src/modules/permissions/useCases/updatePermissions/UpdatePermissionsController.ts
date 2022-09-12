import { Request, Response } from "express";
import { UpdatePermissionsUseCases } from "./UpdatePermissionsUseCases";

class UpdatePermissionsController {
    constructor(private updatePermissionsUseCases: UpdatePermissionsUseCases) { }

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
        const id : number= Number(req.params.id);

        let permissionsWasUpdate = await this.updatePermissionsUseCases.execute({
            id,
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


        if (!permissionsWasUpdate) {
            res.status(200).json({
                error: true,
                message: `No momento não foi possivel atualizar o grupo ${title}. Por favor, verifique e tente novamente!`
            });

        } else {
            res.status(200).json({
                error: false,
                message: `Grupo ${title}, foi atualizado com sucesso.`
            });
        }

    }
}

export { UpdatePermissionsController };