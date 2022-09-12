import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateKaizensUseCases } from "./CreateKaizenUseCases";

class CreateKaizenController {
    constructor(private createKaizensUseCase: CreateKaizensUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            firstName,
            lastName,
            description,
            date,
            type,
            office,
            category,
            occupation
        } = request.body;

        const userResponsible = request.userID;

        let kaizenWasCreated = await this.createKaizensUseCase.execute({
            userResponsible,
            firstName,
            lastName,
            date,
            description,
            type,
            office: Number(office),
            category,
            occupation,
            file: request.file
        });

        if (!kaizenWasCreated) {
            throw new AppError(`Já existe uma conta cadastrada com o e-mail ${firstName}. Por favor, verifique e tente novamente!`, 401)
        } else {
            return response.status(200).json({
                error: false,
                message: `O Kaizen foi criado.`
            });
        }

    }
}

export { CreateKaizenController };