import { AppError } from "../../../../shared/errors/AppError";
import { IAccountRepository } from "../../repositories/IAccountRepository";
import * as jwt from "jsonwebtoken";
import { NodemailerProvider } from "../../../../shared/providers/MailProvider/NodemailerProvider";
import path, { resolve } from "path";
import moment from "moment";

moment.locale('pt');
moment.updateLocale('pt', {
    months: [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
});


class SendForgotPasswordMailUseCase {
    constructor(private accountRepository: IAccountRepository) { }

    async execute(email: string): Promise<void> {

        const user = await this.accountRepository.findByMail(email);
        const templatePath = resolve(__dirname, "../", "..", "views", "emails", "sendForgotPassword.hbs")

        if (!user) {
            throw new AppError("User does not exists!")
        }

        const token = jwt.sign({ email }, process.env.PRIVATEKEY!, {
            expiresIn: "900" // Expires in 15min =>   900
        });

        let dateNow = new Date();

        const variables = {
            name: 'test',
            token,
            date: moment(dateNow).format('L'),
            HeaderTitle: 'Sistema de Kaizen',
            HeaderDescriptio: 'Compromisso, trabalho em equipe e melhoria contínua são chaves para conquistar excelência em qualidade e satisfação dos clientes.',
            bodyTitle: 'Olá, sua conta foi no portal Kaizen foi criada',
            bodyDescription: 'commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, '
        }

        let attachments = [];
        attachments = [{
            filename: 'logo.png',
            path: String(path.join(__dirname, "../", "../", "../", "../", "data", "default", 'logo.png')),
            cid: 'logo',
        }]

        let mail = new NodemailerProvider();
        mail.sendMail(email, `${token}`, variables, templatePath, attachments);

    }
}

export { SendForgotPasswordMailUseCase }