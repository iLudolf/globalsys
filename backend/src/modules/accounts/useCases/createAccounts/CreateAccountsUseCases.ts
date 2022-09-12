import moment from "moment";
import path, { resolve } from "path";
import { NodemailerProvider } from "../../../../shared/providers/MailProvider/NodemailerProvider";
import { storage } from "../../../../shared/storage/storage";
import { cryptoHashInstancia } from "../../../../util/cryptoHash";
import { IAccountRepository, IAccountsDTO } from "../../repositories/IAccountRepository";


class CreateAccountsUseCases {
    constructor(private accountRepository: IAccountRepository) { }

    async execute({ name, lastName, mail, type, file }: IAccountsDTO): Promise<boolean> {

        const accountAlreadyExists = await this.accountRepository.findByMail(mail);

        if (accountAlreadyExists) {
            return false;
        }

        console.log({name, lastName})

        let createPasswodHash = cryptoHashInstancia.hash('Luvep2022!', cryptoHashInstancia.createGenerateSalt(12));
        let password = String(createPasswodHash.hashedpassword);
        let salt = String(createPasswodHash.salt);

        if (Boolean(file)) {
            let directory: string = path.join(__dirname + `../../../../../data/storage/accounts/`);

            await storage.moveFile(file!.path, `${directory}/${file!.filename}`);

            file!.path = `storage/accounts/${file!.filename}`;

            await this.accountRepository.create({
                name,
                lastName,
                mail,
                password,
                type,
                salt,
                file
            })

            return true
        } else {
            this.accountRepository.create({
                name,
                lastName,
                mail,
                password,
                type,
                salt,
                file: {
                    fieldname: "file",
                    originalname: "profile.jpg",
                    encoding: "7bit",
                    mimetype: "image/jpeg",
                    destination: "default",
                    filename: "profile.jpg",
                    path: "default/profile.jpg",
                    size: 40,
                }
            })
        }

        const templatePath = resolve(__dirname, "../", "../", "views", "emails", "sendForgotPassword.hbs")
        let dateNow = new Date();

        const variables = {
            date: moment(dateNow).format('L'),
            HeaderTitle: 'Sistema de Kaizen',
            HeaderDescriptio: 'Compromisso, trabalho em equipe e melhoria contínua são chaves para conquistar excelência em qualidade e satisfação dos clientes.',
            bodyTitle: `Olá ${name}, sua conta foi criada no portal Kaizen`,
            bodyDescription: `Seu usuário é: ${name}.${lastName}`
        }

        let attachments = [];
        attachments = [{
            filename: 'logo.png',
            path: String(path.join(__dirname, "../", "../", "../", "../", "data", "default", 'logo.png')),
            cid: 'logo',
        }]

        let nodeMail = new NodemailerProvider();
        nodeMail.sendMail(mail, 'Sistema de Kaizen', variables, templatePath, attachments);

        return true
    }
}

export { CreateAccountsUseCases };