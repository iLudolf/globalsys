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

        let createPasswodHash = cryptoHashInstancia.hash('Global!', cryptoHashInstancia.createGenerateSalt(12));
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

        // const templatePath = resolve(__dirname, "../", "../", "views", "emails", "sendForgotPassword.hbs")
        // let dateNow = new Date();

        // const variables = {
        //     date: moment(dateNow).format('L'),
        //     HeaderTitle: 'Plataforma de Atendimento Globalsys',
        //     HeaderDescriptio: 'Construímos experiências e entregamos soluções.',
        //     bodyTitle: `Olá ${name}, sua conta foi criada na plataforma de Atendimento Globalsys`,
        //     bodyDescription: `Seu usuário é: ${name}.${lastName}`
        // }

        // let attachments = [];
        // attachments = [{
        //     filename: 'logo.png',
        //     path: String(path.join(__dirname, "../", "../", "../", "../", "data", "default", 'logo.png')),
        //     cid: 'logo',
        // }]

        // let nodeMail = new NodemailerProvider();
        // nodeMail.sendMail(mail, 'Plataforma de Atendimento Globalsys', variables, templatePath, attachments);

        return true
    }
}

export { CreateAccountsUseCases };