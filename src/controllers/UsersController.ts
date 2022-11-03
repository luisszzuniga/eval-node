import { Request, Response } from "express";
import { generateToken } from "../auth/jwt";
import { User } from "../models/User";
import { CrudController } from "./CrudController";
const md5 = require("md5");

class UsersController extends CrudController
{
    register(request: Request, response: Response)
    {
        User.create(request.body)
            .then((user: User) => {
                response.json(user);
            })
            .catch((error: Error) => {
                response.json({"error": "Impossible de créér l'utilisateur."});
            });
    }

    async login(request: Request, response: Response)
    {
        const email = request.body.email;
        const password = request.body.password;

        if (! email || ! password) {
            response.json({"error": "Vous devez saisir un email et un password."});
            return;
        }

        const user = await User.findOne({where: {email: email}, fields: ['email', 'password']})

        if (! user) {
            response.json({"error": "Adresse email ou mot de passe incorrect."});
            return;
        }

        if (user.password === md5(password)) {
            response.json({
                "message": "Connexion réussie.",
                "token": generateToken(user.id, user.name)
            });
            return;
        }

        response.json({"error": "Adresse email ou mot de passe incorrect."});
    }
}

export const usersController = new UsersController;