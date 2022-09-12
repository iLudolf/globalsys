

import * as express from 'express';
import multer from 'multer';
const accountsRouter = express.Router();
import { AuthenticationToken } from "../../middlewares/authentication/AuthenticationToken";
import createAccountsController from "../../modules/accounts/useCases/createAccounts";
import listAccountsController from "../../modules/accounts/useCases/listAccounts";
import deleteAccountsController from "../../modules/accounts/useCases/deleteAccounts";
import updateAccountsController from "../../modules/accounts/useCases/updateAccounts";
import { uploadFile } from "../../middlewares/upload/UploadFile";

const verifyJWT = new AuthenticationToken();

accountsRouter.get('/', verifyJWT.verify, (req: express.Request, resp: express.Response) => {
    return listAccountsController().handle(req, resp);
});

accountsRouter.get('/:id?', verifyJWT.verify, (req: express.Request, resp: express.Response) => {
    return listAccountsController().handle(req, resp);
});

accountsRouter.post('/',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    (req: express.Request, resp: express.Response) => {
        return createAccountsController().handle(req, resp);
    });

accountsRouter.put('/:id?',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    (req: express.Request, resp: express.Response) => {
        return updateAccountsController().handle(req, resp);
    });

accountsRouter.delete('/:id?', verifyJWT.verify, (req: express.Request, resp: express.Response) => {
    return deleteAccountsController().handle(req, resp);
});

export default accountsRouter;