import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteKaizenPhotoUseCase } from "./DeleteKaizenPhotoUseCase";

class DeleteKaizenPhotoController {
    constructor(private deleteKaizenPhotoUseCase: DeleteKaizenPhotoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { kaizenId, photoId } = request.params;

        let listKaizens = await this.deleteKaizenPhotoUseCase.execute(Number(kaizenId), Number(photoId))

        if (!listKaizens) {
            throw new AppError(`Não encontramos o kaizen informado. Por favor, tente novamente!`, 401);
        }

        return response.status(200).json({
            error: false,
            message: `O arquivo foi excluído!`
        });

    }
}

export { DeleteKaizenPhotoController };