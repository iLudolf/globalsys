import { Request, Response } from "express";
import { SeachKaizenUseCases } from "./SeachKaizenUseCases";

class SeachKaizenController {
    constructor(private seachKaizenUseCases: SeachKaizenUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { value, category } = request.params;
        let listKaizen = await this.seachKaizenUseCases.execute(value, category)

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

export { SeachKaizenController };