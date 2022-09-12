import { Request, Response } from "express";
import { LoginAuthenticationUseCase} from "./LoginAuthenticationUseCase";

class LoginAuthenticationUseController{
    constructor(private loginAuthenticationUseCase: LoginAuthenticationUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const {  email, password } = request.body;

        let accountIsExists = await this.loginAuthenticationUseCase.execute({
            email, password
        });  
 

        if(!accountIsExists){
            return response.json({
                error: true,                
                message: `E-mail ou Senha incorretos. Por favor, verifique e tente novamente!`
            });

        }else{
            return response.json({
                error: false,
                message: accountIsExists
            });
        }
        
    }
}

export {LoginAuthenticationUseController}