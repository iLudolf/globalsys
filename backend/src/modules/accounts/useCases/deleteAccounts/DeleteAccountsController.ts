import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteAccountsUseCase } from "./DeleteAccountsUseCase";

class DeleteAccountsController {
    constructor(private deleteAccountsUseCase: DeleteAccountsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        let listAccounts = await this.deleteAccountsUseCase.execute(parseInt(id))

        if (!listAccounts) {
            throw new AppError(`Não encontramos o usuário informado. Por favor, tente novamente!`, 401);
        }

        return response.status(200).json({
            error: false,
            message: `A conta foi removida!`
        });

    }
}

export { DeleteAccountsController };