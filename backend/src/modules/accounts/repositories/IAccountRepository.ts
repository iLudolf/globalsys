import { Accounts } from "../entities/Account";

//Contrato - Modelo - INterface
//DTO => Data Transfer object


interface FileDTO {
    fieldname: string,
    originalname: string,
    encoding?: string,
    mimetype: string,
    destination?: string,
    filename: string,
    path: string,
    size: number
    folderName?: string;
    folderDirectory?: string;
}

interface IAccountsDTO {
    id?: number;
    name: string;
    lastName: string;
    mail: string;
    password?: string;
    type: boolean;
    salt?: string;
    file?: FileDTO
}

interface IAccountRepository {
    findByID(id: number): Promise<boolean>;
    findByMail(mail: string): Promise<boolean>;
    list(id?: number): Promise<Accounts[]>;
    create({ name, lastName, mail, password, type, file }: IAccountsDTO): Promise<Accounts>;
    delete(id: number): Promise<Accounts[]>;
    update({ id, name, lastName, mail, password }: IAccountsDTO): Promise<Accounts[]>;
}

export { IAccountRepository, IAccountsDTO };