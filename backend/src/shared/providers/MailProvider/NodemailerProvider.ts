import { IMailProvider, IAttachments } from "./IMailProvider";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

class NodemailerProvider implements IMailProvider {

    private client!: Transporter;
    private EXCHANGE_HOST: string = String(process.env.EXCHANGE_HOST);
    private EXCHANGE_PORT: number = Number(process.env.EXCHANGE_PORT);
    private EXCHANGE_ACCOUNT_USERNAME: string = String(process.env.MAIL_USERNAME);
    private EXCHANGE_ACCOUNT_PASSWORD: string = String(process.env.MAIL_PASSWORD);

    constructor() {

        const transporter = nodemailer.createTransport({
            host: this.EXCHANGE_HOST,
            port: this.EXCHANGE_PORT, //587
            secure: false, // true for 465, false for other ports          
            auth: {
                user: this.EXCHANGE_ACCOUNT_USERNAME, //  user
                pass: this.EXCHANGE_ACCOUNT_PASSWORD, //  password
            },
            tls: {
                // não falha em certificados inválidos
                rejectUnauthorized: false
            },
        });

        transporter.verify(function (error, success) {
            if (error) {
                return console.error(error);
            }
            if (success) {
                console.log('\n\nConnection with Microsoft Exchange Server was successful, the server is ready to receive our messages\n');
            }
        });

        this.client = transporter
    }

    public async sendMail(
        to: string,
        subject: string,
        variables: any,
        path: string,
        attachments?: IAttachments[]
    ): Promise<void> {

        //Ler arquivo templade
        const tamplateFileContent = fs.readFileSync(path).toString('utf-8');

        // handlebars Parse 
        const tamplateParse = handlebars.compile(tamplateFileContent);

        const templateHTML = tamplateParse(variables);

        const message = await this.client.sendMail({
            from: "nao-responda@gmail.com",
            to,
            subject,
            html: templateHTML,
            attachments
        })

        console.log('Message send: %s', message.messageId);
    }

}

export { NodemailerProvider }