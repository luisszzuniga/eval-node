"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const jwt_1 = require("../auth/jwt");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
const md5 = require("md5");
class UsersController extends CrudController_1.CrudController {
    register(request, response) {
        User_1.User.create(request.body)
            .then((user) => {
            response.json(user);
        })
            .catch((error) => {
            response.json({ "error": "Impossible de créér l'utilisateur." });
        });
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = request.body.email;
            const password = request.body.password;
            if (!email || !password) {
                response.json({ "error": "Vous devez saisir un email et un password." });
                return;
            }
            const user = yield User_1.User.findOne({ where: { email: email }, fields: ['email', 'password'] });
            if (!user) {
                response.json({ "error": "Adresse email ou mot de passe incorrect." });
                return;
            }
            if (user.password === md5(password)) {
                response.json({
                    "message": "Connexion réussie.",
                    "token": (0, jwt_1.generateToken)(user.id, user.name)
                });
                return;
            }
            response.json({ "error": "Adresse email ou mot de passe incorrect." });
        });
    }
}
exports.usersController = new UsersController;
