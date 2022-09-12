interface IAttachments {
    filename: string;
    path: string;
    cid: string;
}

interface IMailProvider {
    sendMail(
        to: string,
        subject: string,
        variables: any,
        path: string,
        attachments?: IAttachments[]
    ): Promise<void>
}

export { IMailProvider , IAttachments}