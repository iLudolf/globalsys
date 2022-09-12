import { Request, Response } from "express";
import { UpdateKaizensUseCase } from "./UpdateKaizenUseCase";

class UpdateKaizensController {
    constructor(private updateKaizensUseCase: UpdateKaizensUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const id = Number(request.params.id);
        const { 
            date,
            lastName,
            firstName,
            description,
            type,
            office,
            occupation,
            category
        } = request.body;
        const userResponsible = request.userID;

        let updateKaizens = await this.updateKaizensUseCase.execute({
            id: Number(id),
            date,
            userResponsible,
            lastName,
            firstName,
            description,
            type,
            office: Number(office),
            occupation,
            category,
            file: request.file
        });

        if (updateKaizens) {
            return response.json({
                error: false,
                message: `Kaizen foi atualizado!`
            });
        } else {
            return response.json({
                error: true,
                message: `Não encontramos o usuário informado. Por favor, tente novamente!`
            });
        }

    }
}

export { UpdateKaizensController };