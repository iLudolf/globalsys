import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { IncludeAttachmentsUseCases } from "./IncludeAttachmentsUseCases";

class IncludeAttachmentsController {
    constructor(private createKaizensUseCase: IncludeAttachmentsUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        const file = request.file;

        let kaizenWasCreated = await this.createKaizensUseCase.execute(
            Number(id),
            file!
        );

        if (!kaizenWasCreated) {
            throw new AppError(`No momento não foi possivel incluir o arquivo. Por favor, verifique e tente novamente!`, 401)
        } else {
            return response.status(200).json({
                error: false,
                message: `O arquivo ${file!.originalname} foi incluido ao Kaizen.`
            });
        }

    }
}

export { IncludeAttachmentsController };