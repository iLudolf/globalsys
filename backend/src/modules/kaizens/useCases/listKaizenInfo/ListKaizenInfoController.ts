import { Request, Response } from "express";
import { ListKaizenInfoUseCases } from "./ListKaizenInfoUseCases";

class ListKaizenInfoController {
    constructor(private listKaizenInfoUseCases: ListKaizenInfoUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { id } = request.params;
        let listKaizen = await this.listKaizenInfoUseCases.execute(Number(id))

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

export { ListKaizenInfoController };