

import * as express from 'express';
import createSecurityGroupController from '../../modules/securityGroup/useCases/createSecurityGroup';
import listSecurityController from '../../modules/securityGroup/useCases/listSecurityGroup';
import listUsersNotExistSecurityGroupController from '../../modules/securityGroup/useCases/listUsersNotExistSecurityGroup';
import deleteUserSecurityGroupController from '../../modules/securityGroup/useCases/deleteUserSecurityGroup';

import { AuthenticationToken } from "../../middlewares/authentication/AuthenticationToken";

const securityGroupRouter = express.Router()
const verifyJWT = new AuthenticationToken();

securityGroupRouter.post('/', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
        createSecurityGroupController().handle(req, resp)
);

securityGroupRouter.get('/users/:id?', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
    listUsersNotExistSecurityGroupController().handle(req, resp)
);

securityGroupRouter.get('/:id?', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
        listSecurityController().handle(req, resp)
);

securityGroupRouter.delete('/:groupControlsID?/:userID?', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
    deleteUserSecurityGroupController().handle(req, resp)
);

export default securityGroupRouter;


