import {
    ISecurityGroupRepository,
    ISecurityGroupDTO
} from "../../repositories/IPermissionsRepository";

/*
    REGRA DE NEGOCIO 
*/

class CreateSecurityGroupUseCases {
    constructor(private permissionsRepository: ISecurityGroupRepository) { }

    async execute({       
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {

        const alreadyExists = await this.permissionsRepository.findById({
            groupControlsID,
            userID
        });

        if (alreadyExists) {
            return false;
        }

        let isCreate = this.permissionsRepository.create({           
            groupControlsID,
            userID
        })
        return isCreate
    }
}

export { CreateSecurityGroupUseCases };