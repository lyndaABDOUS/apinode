import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';


import Tuteur from '../models/Tuteur';
import User from '../models/User';
import PasswordException from '../exception/PasswordException';

export class AuthController {

    static login = async(req: Request, res: Response) => { 

        let data: any = req.body;

        try {
            let user: any = await User.select({ email: data.email });
            if (user.length < 0)
                throw new Error(`Email don't exist!`)
            user = user[0];

            const isOk = await PasswordException.comparePassword(data.password, user.password);

            if (!isOk)
                throw new Error('Password erroné')

            const theToken: any = await sign({ id: user.id_user, name: user.fullname }, < string > process.env.JWT_KEY, { expiresIn: '5m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);
        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    /**
     *
     *
     * @static
     * @memberof AuthController
     */
    static register = async(req: Request, res: Response) => {
        let data: any = req.body;

        try {
            if (await User.isExiste(data.email))
                throw new Error(`Email exist!`)

            const user = new User(null, data.firstname, data.lastname, data.email,  await PasswordException.hashPassword(data.password), data.date_naissance, data.sexe);
            await user.save();
           

            const theToken: any = await sign({ id: user.id, name: user.fullname }, < string > process.env.JWT_KEY, { expiresIn: '5m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);

        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    refreshToken = async(req: Request, res: Response) => {}
    checkToken = async(req: Request, res: Response) => {}
    logout = async(req: Request, res: Response) => {}

}