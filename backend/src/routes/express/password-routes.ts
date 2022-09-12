
import * as express from 'express';
import sendForgotPasswordMailController from "../../modules/accounts/useCases/sendForgotPasswordMail";
const passwordRouter = express.Router();

passwordRouter.post('/forgot',
    (req: express.Request, resp: express.Response) =>
        sendForgotPasswordMailController().handle(req, resp)
);

export default passwordRouter;