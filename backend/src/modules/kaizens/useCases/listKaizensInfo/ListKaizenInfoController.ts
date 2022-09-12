import { Request, Response } from "express";
import { ListKaizensInfoUseCases } from "./ListKaizenInfoUseCases";

class ListKaizensInfoController {
    constructor(private listKaizensInfoUseCases: ListKaizensInfoUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
      
        let listKaizensInfo = await this.listKaizensInfoUseCases.execute()

        if (listKaizensInfo.length > 0) {
            return response.json({
                error: false,
                message: listKaizensInfo
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o kaizen informado. Por favor, tente novamente!`
            });
        }

    }
}

export { ListKaizensInfoController };