import { ISecurityGroupRepository, ISecurityGroupDTO } from "../../repositories/IPermissionsRepository";


/*
REGRA DE NEGOCIO 
*/

class ListSecurityUseCases {
    constructor(private securityGroupRepository: ISecurityGroupRepository) { }

    async execute(id?: number): Promise<any> {

        let isExist = this.securityGroupRepository.list(id);

        return isExist
    }
}

export { ListSecurityUseCases };