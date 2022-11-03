var express = require('express');
var router = express.Router();

import { Request, Response } from 'express';

//Controllers
import { minesController } from '../controllers/MinesController';
import { concessionsController } from '../controllers/ConcessionsController';

//Mines
router.get("/mines", (request: Request, response: Response) => {
    minesController.all(request, response);
});
router.get("/mines/show/:id", (request: Request, response: Response) => {
    minesController.show(request, response);
});
router.post("/mines/add", (request: Request, response: Response) => {
    minesController.create(request, response);
});
router.put("/mines/update/:id", (request: Request, response: Response) => {
    minesController.update(request, response);
});
router.delete("/mines/delete", (request: Request, response: Response) => {
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
router.post("/concessions/add", (request: Request, response: Response) => {
    concessionsController.create(request, response);
});
router.put("/concessions/update/:id", (request: Request, response: Response) => {
    concessionsController.update(request, response);
});
router.delete("/concessions/delete", (request: Request, response: Response) => {
    concessionsController.delete(request, response);
});
//Fin concessions

export { router };