import { IPermissionsRepository, IPermissionsDTO } from "../../repositories/IPermissionsRepository";


/*
REGRA DE NEGOCIO 
*/

class CreatePermissionsUseCases {
    constructor(private permissionsRepository: IPermissionsRepository) { }

    async execute({
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
    }: IPermissionsDTO): Promise<boolean> {

        const permissionsNameAlreadyExists = await this.permissionsRepository.findByName(title);

        if (permissionsNameAlreadyExists) {
            return false;
        }

        let isCreate = this.permissionsRepository.create({
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
        })
        return isCreate
    }
}

export { CreatePermissionsUseCases };