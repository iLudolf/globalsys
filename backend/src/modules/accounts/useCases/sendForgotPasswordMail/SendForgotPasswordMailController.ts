import { Request, Response } from "express";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"

class SendForgotPasswordMailController {
    constructor(private sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.body;

        await this.sendForgotPasswordMailUseCase.execute(email);

        return response.json({
            error: false,
            message: ` Dentro de instantes você receberá uma nova mensagem em seu E-mail alternativo com instruções para recuperar sua senha.`
        });
    }
}

export { SendForgotPasswordMailController }