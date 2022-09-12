import { PostgressSecurityGroupRepository } from "../../repositories/PostgressSecurityGroupRepository";


/*
REGRA DE NEGOCIO 
*/

class ListUsersNotExistSecurityGroupUseCases {
    constructor(private securityGroupRepository: PostgressSecurityGroupRepository) { }

    async execute(groupControlsID: number): Promise<any> {


        const alreadyExists = await this.securityGroupRepository.findGroupUsers({
            groupControlsID
        });    
   

        if (!alreadyExists) {
            return [];      
        }


        let isExist = await this.securityGroupRepository.listAllUser(groupControlsID);   
        return isExist;        
    }
}

export { ListUsersNotExistSecurityGroupUseCases };