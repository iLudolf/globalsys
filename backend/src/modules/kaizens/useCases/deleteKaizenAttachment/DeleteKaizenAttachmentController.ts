import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteKaizenAttachmenUseCase } from "./DeleteKaizenAttachmentUseCase";

class DeleteKaizenAttachmentController {
    constructor(private deleteKaizenAttachmenUseCase: DeleteKaizenAttachmenUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { orginalName, kaizenId, docId } = request.params;

        let listKaizens = await this.deleteKaizenAttachmenUseCase.execute(Number(kaizenId), Number(docId))

        if (!listKaizens) {
            throw new AppError(`Não encontramos o kaizen informado. Por favor, tente novamente!`, 401);
        }

        return response.status(200).json({
            error: false,
            message: `O arquivo foi excluído!`
        });

    }
}

export { DeleteKaizenAttachmentController };