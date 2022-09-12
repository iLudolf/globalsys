import { Request, Response } from "express";
import { ListKaizenUseCases } from "./ListKaizenUseCases";

class ListKaizenController {
    constructor(private listKaizenUseCases: ListKaizenUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { id } = request.params;
        let listKaizen = await this.listKaizenUseCases.execute(Number(id))

        if (listKaizen.length > 0) {
            return response.json({
                error: false,
                message: listKaizen
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o kaizen informado. Por favor, tente novamente!`
            });
        }
    }
}

export { ListKaizenController };