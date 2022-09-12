
import * as express from 'express';

import multer from 'multer';
import { uploadFile } from "../../middlewares/upload/UploadFile";
import { NodemailerProvider } from '../../shared/providers/MailProvider/NodemailerProvider';
const testRouter = express.Router();

testRouter.get('/', multer(uploadFile.getConfig).single("file"), async function (req: express.Request, res: express.Response) {
    res.json({
        status: "ok",
        message: "Server test is running ⚡️",
        date: new Date().toString()
    });

    let mail = new NodemailerProvider();
    mail.sendMail('israel.laureth@luvep.com.br',  'subject', '');
   
});

export default testRouter;