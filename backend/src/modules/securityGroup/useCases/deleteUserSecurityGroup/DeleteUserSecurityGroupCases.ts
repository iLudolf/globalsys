import {
    ISecurityGroupRepository,
    ISecurityGroupDTO
} from "../../repositories/IPermissionsRepository";


class DeleteUserSecurityGroupCases {
    constructor(private permissionsRepository: ISecurityGroupRepository) { }

    async execute({       
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {

        const alreadyExists = await this.permissionsRepository.findById({
            groupControlsID,
            userID
        });

        if (!alreadyExists) {
            return false;
        }

        let isDelete = this.permissionsRepository.delete({           
            groupControlsID,
            userID
        })
        return isDelete
    }
}

export { DeleteUserSecurityGroupCases };