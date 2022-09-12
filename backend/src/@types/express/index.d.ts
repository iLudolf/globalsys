declare namespace Express {
    interface Request {
        userID: number;
        file?: {
            fieldname: string,
            originalname: string,
            encoding: string,
            mimetype: string,
            destination: string,
            filename: string,
            path: string,
            size: number
            folderDirectory: string,
        }
    }
}

