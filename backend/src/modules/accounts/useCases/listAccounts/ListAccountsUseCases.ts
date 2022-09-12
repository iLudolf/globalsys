import { IAccountRepository } from "../../repositories/IAccountRepository";
import { Accounts } from "../../entities/Account";


class ListAccountsUseCases {
    constructor(private accountRepository: IAccountRepository) { }

    async execute( id?: number): Promise<Accounts[]>{
        return await this.accountRepository.list(id);
    }
}

export { ListAccountsUseCases }