import { IPermissionsRepository, IPermissionsDTO } from "../../repositories/IPermissionsRepository";


/*
REGRA DE NEGOCIO 
*/

class ListPermissionsUseCases {
    constructor(private permissionsRepository: IPermissionsRepository) { }

    async execute(id?: number): Promise<any> {

        let isExist = this.permissionsRepository.list(id);

        return isExist
    }
}

export { ListPermissionsUseCases };