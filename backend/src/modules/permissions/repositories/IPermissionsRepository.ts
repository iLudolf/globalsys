import { Permissions } from "../entities/Permissions";


interface IAcessModel {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}

interface IPermissionsDTO {
    id?: Number
    title: string;
    description: IAcessModel;
    permissionGroups: IAcessModel;
    categories: IAcessModel;
    authorizationsCategories: IAcessModel;
    dashboard: IAcessModel;
    expenses: IAcessModel;
    listVehicles: IAcessModel;
    registerVehicles: IAcessModel;
    userAdministration: IAcessModel;
    userID: number;
};

interface IPermissionsRepository {

    findById(id: number): Promise<boolean>;
    findByName(title: string): Promise<boolean>;

    list(id?: number): Promise<Permissions[]>;

    create({
        title,
        description,
        permissionGroups,
        categories,
        authorizationsCategories,
        dashboard,
        expenses,
        listVehicles,
        registerVehicles,
        userID
    }: IPermissionsDTO): Promise<boolean>;

    delete(id: number): Promise<Permissions[]>;

    update({
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
        userID
    }: IPermissionsDTO): Promise<boolean>;
}

export { IPermissionsRepository, IPermissionsDTO, IAcessModel };