import { IPermissionsRepository, IPermissionsDTO } from "../../repositories/IPermissionsRepository";


/*
REGRA DE NEGOCIO 
*/

class UpdatePermissionsUseCases {
    constructor(private permissionsRepository: IPermissionsRepository) { }

    async execute({
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
    }: IPermissionsDTO): Promise<boolean> {

        const permissionsNameAlreadyExists = await this.permissionsRepository.findById(Number(id));

        if (!permissionsNameAlreadyExists) {
            return false;
        }

        let isUpdate = this.permissionsRepository.update({
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
        })
        return isUpdate
    }
}

export { UpdatePermissionsUseCases };