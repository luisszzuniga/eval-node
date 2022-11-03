var express = require('express');
var router = express.Router();

import * as Auth from '../middlewares/authenticate';
import { Request, Response } from 'express';

//Controllers
import { minesController } from '../controllers/MinesController';
import { concessionsController } from '../controllers/ConcessionsController';
import { usersController } from '../controllers/UsersController';

//Mines
router.get("/mines", (request: Request, response: Response) => {
    minesController.all(request, response);
});
router.get("/mines/show/:id", (request: Request, response: Response) => {
    minesController.show(request, response);
});
router.post("/mines/add", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    minesController.create(request, response);
});
router.put("/mines/update/:id", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    minesController.update(request, response);
});
router.delete("/mines/delete/:id", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    minesController.delete(request, response);
});
//Fin mines

//Concessions
router.get("/concessions", (request: Request, response: Response) => {
    concessionsController.all(request, response);
});
router.get("/concessions/show/:id", (request: Request, response: Response) => {
    concessionsController.show(request, response);
});
router.post("/concessions/add", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    concessionsController.create(request, response);
});
router.put("/concessions/update/:id", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    concessionsController.update(request, response);
});
router.delete("/concessions/delete/:id", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    concessionsController.delete(request, response);
});
//Voir toutes les mines d'une concession
router.get("/concessions/show/mines/:id", (request: Request, response: Response) => {
    concessionsController.showMines(request, response);
});
//Voir tous les contacts d'une concession
router.get("/concessions/show/contacts/:id", (request: Request, response: Response) => {
    concessionsController.showContacts(request, response);
})
//Voir la concession + ses contacts + ses mines
router.get("/concessions/all/:id", (request: Request, response: Response) => {
    concessionsController.showAll(request, response);
})
//Fin concessions

//Utilisateurs
router.post("/register", (request: Request, response: Response) => {
    usersController.register(request, response);
})
router.post("/login", (request: Request, response: Response) => {
    usersController.login(request, response);
});
//Fin utilisateurs

export { router };