import * as express from 'express';
const kaizenRouter = express.Router();
import multer from 'multer';
import { AuthenticationToken } from "../../middlewares/authentication/AuthenticationToken";
import createKaizenController from "../../modules/kaizens/useCases/createKaizen";
import listKaizenController from "../../modules/kaizens/useCases/listKaizens";
import listKaizenOverviewController from "../../modules/kaizens/useCases/listKaizenOverview";
import includeTextOverviewController from "../../modules/kaizens/useCases/includeTextOverview";
import listKaizenDocsController from "../../modules/kaizens/useCases/listKaizenDocs";
import listKaizenPhotosController from "../../modules/kaizens/useCases/listKaizenPhotos";
import listKaizensInfoController from "../../modules/kaizens/useCases/listKaizensInfo";
import seachKaizenController from "../../modules/kaizens/useCases/seachKaizen";
import ListKaizenInfoController from "../../modules/kaizens/useCases/listKaizenInfo";
import deleteKaizensController from "../../modules/kaizens/useCases/deleteKaizen";
import updateKaizensController from "../../modules/kaizens/useCases/updateKaizen";
import includeAttachmentsController from "../../modules/kaizens/useCases/includeAttachments";
import deleteKaizenAttachmentController from "../../modules/kaizens/useCases/deleteKaizenAttachment";
import deleteKaizenPhotoController from "../../modules/kaizens/useCases/deleteKaizenPhoto";
import includePhotoController from "../../modules/kaizens/useCases/includePhoto";
import { uploadFile } from "../../middlewares/upload/UploadFile";

const verifyJWT = new AuthenticationToken();

kaizenRouter.get('/', (req: express.Request, resp: express.Response) => {
    return listKaizenController().handle(req, resp);
});

kaizenRouter.get('/dashboard/', (req: express.Request, resp: express.Response) => {
    return listKaizensInfoController().handle(req, resp);
});

kaizenRouter.get('/seach/:category/:value', (req: express.Request, resp: express.Response) => {
    return seachKaizenController().handle(req, resp);
});

kaizenRouter.get('/:category/', (req: express.Request, resp: express.Response) => {
    return listKaizenController().handle(req, resp);
});

kaizenRouter.get('/info/:id/', (req: express.Request, resp: express.Response) => {
    return ListKaizenInfoController().handle(req, resp);
});

kaizenRouter.get('/overview/:id/', (req: express.Request, resp: express.Response) => {
    return listKaizenOverviewController().handle(req, resp);
});

kaizenRouter.post('/overview/:id/',
    verifyJWT.verify,
    (req: express.Request, resp: express.Response) => {
        return includeTextOverviewController().handle(req, resp);
    });

kaizenRouter.get('/docs/:id/', (req: express.Request, resp: express.Response) => {
    return listKaizenDocsController().handle(req, resp);
});

kaizenRouter.get('/photos/:id/', (req: express.Request, resp: express.Response) => {
    return listKaizenPhotosController().handle(req, resp);
});

kaizenRouter.post('/docs/:id',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    verifyJWT.verify, (req: express.Request, resp: express.Response) => {
        return includeAttachmentsController().handle(req, resp);
    });

kaizenRouter.post('/photos/:id',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    verifyJWT.verify, (req: express.Request, resp: express.Response) => {
        return includePhotoController().handle(req, resp);
    });

kaizenRouter.post('/',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    verifyJWT.verify, (req: express.Request, resp: express.Response) => {
        return createKaizenController().handle(req, resp);
    });

kaizenRouter.put('/:id',
    verifyJWT.verify,
    multer(uploadFile.getConfig).single("file"),
    verifyJWT.verify, (req: express.Request, resp: express.Response) => {
        return updateKaizensController().handle(req, resp);
    });

kaizenRouter.delete('/:id',
    verifyJWT.verify,
    (req: express.Request, resp: express.Response) => {
        return deleteKaizensController().handle(req, resp);
    });

kaizenRouter.delete('/docs/:kaizenId/:docId/',
    verifyJWT.verify,
    (req: express.Request, resp: express.Response) => {
        return deleteKaizenAttachmentController().handle(req, resp);
    });

kaizenRouter.delete('/photo/:kaizenId/:photoId/',
    verifyJWT.verify,
    (req: express.Request, resp: express.Response) => {
        return deleteKaizenPhotoController().handle(req, resp);
    });



export default kaizenRouter;