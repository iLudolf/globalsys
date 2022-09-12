import { Request, Response } from "express";
import { ListKaizenOverviewUseCases } from "./ListKaizenOverviewUseCases";

class ListKaizenOverviewController {
    constructor(private listKaizenOverviewUseCases: ListKaizenOverviewUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        let listKaizen = await this.listKaizenOverviewUseCases.execute(Number(id))

        if (listKaizen.length > 0) {
            return response.json({
                error: false,
                message: listKaizen
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o kaizen informação detalhadas. Por favor, tente novamente!`
            });
        }
    }
}

export { ListKaizenOverviewController };