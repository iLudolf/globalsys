
import * as express from 'express';
import defaultRouter from "./default-routes";
import accountsRouter from "./accounts-routes";
import authenticationRouter from "./authentication-routes";
import permissionsRouter from "./permissions-routes";
import securityGroupRouter from "./security-group-routes";
import streamRouter from "./stream-routes";
import passwordRoutes from "./password-routes";

const router = express.Router();

router.use('/', defaultRouter);
router.use('/accounts/', accountsRouter);
router.use('/authentication/', authenticationRouter);
router.use('/permission/', permissionsRouter);
router.use('/security-group/', securityGroupRouter);
router.use('/stream/', streamRouter);
router.use('/password/', passwordRoutes);

export default router;