import { Authentication } from "../entities/Authentication";


interface IAuthenticationDTO {
    user_id: number;
}

interface IAccAuthenticationDTO {
    password: string;
    user_id: number;
    salt?: string;
    id?: number;
    email: string;
    created_on?: Date;
    updated_at?: Date;
    token: string;
    path: string;
    name: string;
    last_name: string;
    isadmin: boolean;
}

interface IAuthenticationRepository {
    findByMail(email: string): Promise<number>;
    login({ user_id }: IAuthenticationDTO): Promise<IAccAuthenticationDTO[]>;
    logout({ user_id }: IAuthenticationDTO): Promise<Authentication>;
    reset(id: number): Promise<Authentication[]>;
}

export { IAuthenticationRepository, IAuthenticationDTO, IAccAuthenticationDTO };