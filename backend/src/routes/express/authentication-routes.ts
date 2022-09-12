

import * as express from 'express';
const authenticationRouter = express.Router()

import  loginAuthenticationUseController from '../../modules/authentication/useCases/loginUseCase';


authenticationRouter.post('/login', (req: express.Request, resp: express.Response) => {
    return loginAuthenticationUseController().handle(req, resp);
});

export default authenticationRouter;