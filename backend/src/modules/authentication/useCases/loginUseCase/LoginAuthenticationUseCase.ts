import { IAuthenticationRepository, IAccAuthenticationDTO } from "../../repositories/IAuthenticationRepository";
import { cryptoHashInstancia } from "../../../../util/cryptoHash";
import * as jwt from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IReponse {
    user_id: number;
    name: string;
    token: string;
    path: string;
    isAdmin: boolean;
}


class LoginAuthenticationUseCase {
    constructor(private authenticationRepository: IAuthenticationRepository) { }

    async execute({ email, password }: IRequest): Promise<IReponse | boolean> {


        const user_id: number = await this.authenticationRepository.findByMail(email);


        if (user_id <= -1) {
            return false;
        }

        let accessCredentials: IAccAuthenticationDTO[] = await this.authenticationRepository.login({
            user_id
        });


        const validity = cryptoHashInstancia.comparePassword(password, {
            salt: String(accessCredentials[0].salt),
            hashedpassword: String(accessCredentials[0].password)
        })

        if (!Boolean(validity)) {
            return false;
        }

        const token = jwt.sign({ user_id }, process.env.PRIVATEKEY!, {
            expiresIn: "10h" // Expires in 15min =>   900
        });

        return {
            user_id: user_id,
            name: `${String(accessCredentials[0].name)} ${String(accessCredentials[0].last_name)}`,
            token,
            path: accessCredentials[0].path,
            isAdmin: accessCredentials[0].isadmin
        }
    }
}
export { LoginAuthenticationUseCase };