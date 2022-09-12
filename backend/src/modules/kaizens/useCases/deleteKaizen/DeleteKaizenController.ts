import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteKaizenUseCase } from "./DeleteKaizenUseCase";

class DeleteKaizensController {
    constructor(private deleteKaizensUseCase: DeleteKaizenUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        let listKaizens = await this.deleteKaizensUseCase.execute(parseInt(id))

        if (!listKaizens) {
            throw new AppError(`Não encontramos o kaizen informado. Por favor, tente novamente!`, 401);
        }

        return response.status(200).json({
            error: false,
            message: `Kaizen foi excluído!`
        });

    }
}

export { DeleteKaizensController };