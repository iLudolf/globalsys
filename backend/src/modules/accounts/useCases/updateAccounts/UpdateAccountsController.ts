import { Request, Response } from "express";
import { UpdateAccountsUseCase } from "./UpdateAccountsUseCase";

class UpdateAccountsController {
    constructor(private updateAccountsUseCase: UpdateAccountsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const id = Number(request.params.id);
        const { name, last_name, mail } = request.body;
        const lastName = last_name;

        let listAccounts = await this.updateAccountsUseCase.execute({ id, name, lastName, mail });

        if (listAccounts) {
            return response.json({
                error: false,
                message: `A conta foi atualizada!`
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o usuário informado. Por favor, tente novamente!`
            });
        }

    }
}

export { UpdateAccountsController };