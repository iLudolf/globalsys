

import * as express from 'express';
import createPermissionsController from '../../modules/permissions/useCases/createPermissions';
import listPermissionsController from '../../modules/permissions/useCases/listPermissions';
import updatePermissionsController from '../../modules/permissions/useCases/updatePermissions';
import { AuthenticationToken } from "../../middlewares/authentication/AuthenticationToken";

const permissionsRouter = express.Router()
const verifyJWT = new AuthenticationToken();

permissionsRouter.post('/', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
        createPermissionsController().handle(req, resp)
);

permissionsRouter.get('/:id?', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
        listPermissionsController().handle(req, resp)
);

permissionsRouter.put('/:id?', verifyJWT.verify,
    (req: express.Request, resp: express.Response) =>
        updatePermissionsController().handle(req, resp)
);

export default permissionsRouter;


