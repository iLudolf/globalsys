import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
import { AppError } from "../../shared/errors/AppError";

interface IDecoded {
    user_id: number;
    iat: number;
    exp: number;
}

class AuthenticationToken {
    constructor() {
    }

    public verify(req: Request, res: Response, next: NextFunction): void {
        try {
            const token = String(req.headers['authorization']);

            if (!token) {
                throw new AppError("Token missing", 401)

            };

            jwt.verify(token, process.env.PRIVATEKEY!, function (err, decoded) {
                if (err) {
                    throw new AppError("Token missing", 401);

                }

                req.userID = ((<IDecoded>decoded).user_id);
                next();
            });

        } catch (error) {
            throw new AppError("Token missing", 401);
        }
    }
};

export { AuthenticationToken };