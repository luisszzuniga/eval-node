import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../auth/jwt';
import status from 'http-status';

/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessTypes list of allowed access types of a specific endpoint
 */
export const authorize = (allowedAccessTypes: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let jwt = req.headers.authorization;

        // verify request has token
        if (!jwt) {
            return res.status(status.UNAUTHORIZED).json({ message: 'Invalid token ' });
        }

        // remove Bearer if using Bearer Authorization mechanism
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }

        // verify token hasn't expired yet and is valid
        const decodedToken = await validateToken(jwt);

        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(status.UNAUTHORIZED).json({ message: 'Expired token' });
            return;
        }

        console.log(error)

        res.status(status.UNAUTHORIZED).json({ message: 'Failed to authenticate user' });
    }
};