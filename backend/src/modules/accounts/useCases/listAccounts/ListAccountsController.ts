import { Request, Response } from "express";
import { ListAccountsUseCases } from "./ListAccountsUseCases";

class ListAccountsController {
    constructor(private listAccountsUseCases: ListAccountsUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        let listAccounts = await this.listAccountsUseCases.execute(parseInt(id))


        if (listAccounts.length > 0) {
            return response.json({
                error: false,
                message: listAccounts
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o usuário informado. Por favor, tente novamente!`
            });
        }

    }
}

export { ListAccountsController };