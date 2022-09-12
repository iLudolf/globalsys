import { SecurityGroup } from "../entities/SecurityGroup";


interface IAcessModel {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}

interface ISecurityGroupDTO {
    groupControlsID?: Number;
    userID?: number;
};

interface ISecurityGroupRepository {

    findById({ groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean>;

    findGroupUsers({
        groupControlsID
    }: ISecurityGroupDTO): Promise<boolean>;

    list(id?: number): Promise<SecurityGroup[]>;

    create({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean>;

    delete({groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean>;

    update({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean>;
}

export { ISecurityGroupRepository, ISecurityGroupDTO, IAcessModel };