import { Request, Response } from "express";
import { ListKaizenDocsUseCases } from "./ListKaizenDocsUseCases";

class ListKaizenDocsController {
    constructor(private listKaizenDocsUseCases: ListKaizenDocsUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { id } = request.params;
        let listKaizen = await this.listKaizenDocsUseCases.execute(Number(id))

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

export { ListKaizenDocsController };