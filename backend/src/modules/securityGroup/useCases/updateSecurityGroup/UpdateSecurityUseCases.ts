import { ISecurityGroupRepository, ISecurityGroupDTO  } from "../../repositories/IPermissionsRepository";


/*
REGRA DE NEGOCIO 
*/

class UpdateSecurityUseCases {
    constructor(private securityGroupRepository: ISecurityGroupRepository) { }

    async execute({
        id,
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {

        const permissionsNameAlreadyExists = await this.securityGroupRepository.findById(Number(id));

        if (!permissionsNameAlreadyExists) {
            return false;
        }

        let isUpdate = this.securityGroupRepository.update({
            id,
            groupControlsID,
            userID
        })
        return isUpdate
    }
}

export { UpdateSecurityUseCases };