import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateAccountsUseCases } from "./CreateAccountsUseCases";

class CreateAccountsController {
    constructor(private createAccountsUseCase: CreateAccountsUseCases) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            lastName,
            mail,   
            type
        } = request.body;

        let AccountWasCreated = await this.createAccountsUseCase.execute({
            name,
            lastName,
            mail, 
            type,
            file: request.file
        });

        if(!AccountWasCreated){
            throw new AppError(`Já existe uma conta cadastrada com o e-mail ${mail}. Por favor, verifique e tente novamente!`, 401)    
        }else{
            return response.status(200).json({
                error: false,
                message: `A conta do usuário ${name}, foi criado.`
            });
        }
        
    }
}

export { CreateAccountsController };