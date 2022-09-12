import { IAccountRepository } from "../../repositories/IAccountRepository";
import { Accounts } from "../../entities/Account";

class DeleteAccountsUseCase {
    constructor(private accountRepository: IAccountRepository) { }

    async execute( id: number): Promise<boolean>{

        const accountAlreadyExists = await this.accountRepository.findByID(id);

        if (!accountAlreadyExists) {
            return false;
        }

        await this.accountRepository.delete(id);

        return true
    }
}

export { DeleteAccountsUseCase };