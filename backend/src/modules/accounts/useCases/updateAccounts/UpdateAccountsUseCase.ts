import { IAccountRepository } from "../../repositories/IAccountRepository";
import { Accounts } from "../../entities/Account";

interface IRequest {
    id: number;
    name: string;
    lastName: string;
    mail: string;
    password?: string;
}


class UpdateAccountsUseCase {
    constructor(private accountRepository: IAccountRepository) { }

    async execute({id, name, lastName, mail} : IRequest): Promise<boolean>{

        const accountAlreadyExists = await this.accountRepository.findByID(id);

        if (!accountAlreadyExists) {
            return false;
        }

        await this.accountRepository.update({id, name, lastName, mail});

        return true
    }
}

export { UpdateAccountsUseCase };