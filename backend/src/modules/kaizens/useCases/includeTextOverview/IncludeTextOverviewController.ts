import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { IncludeTextOverviewUseCases } from "./IncludeTextOverviewUseCases";

class IncludeTextOverviewController {
    constructor(private createKaizensUseCase: IncludeTextOverviewUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            description,
        } = request.body;

        const { id } = request.params;

        let kaizenWasCreated = await this.createKaizensUseCase.execute(
            Number(id),
            description,
        );

        if (!kaizenWasCreated) {
            throw new AppError(`No momento não foi possivel incluir o texto ao Kaizen. Por favor, verifique e tente novamente!`, 401)
        } else {
            return response.status(200).json({
                error: false,
                message: `O texto foi incluido ao Kaizen!`
            });
        }

    }
}

export { IncludeTextOverviewController };