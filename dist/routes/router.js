"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
//Controllers
const MinesController_1 = require("../controllers/MinesController");
const ConcessionsController_1 = require("../controllers/ConcessionsController");
//Mines
router.get("/mines", (request, response) => {
    MinesController_1.minesController.all(request, response);
});
router.get("/mines/show/:id", (request, response) => {
    MinesController_1.minesController.show(request, response);
});
router.post("/mines/add", (request, response) => {
    MinesController_1.minesController.create(request, response);
});
router.put("/mines/update/:id", (request, response) => {
    MinesController_1.minesController.update(request, response);
});
router.delete("/mines/delete/:id", (request, response) => {
    MinesController_1.minesController.delete(request, response);
});
//Fin mines
//Concessions
router.get("/concessions", (request, response) => {
    ConcessionsController_1.concessionsController.all(request, response);
});
router.get("/concessions/show/:id", (request, response) => {
    ConcessionsController_1.concessionsController.show(request, response);
});
router.post("/concessions/add", (request, response) => {
    ConcessionsController_1.concessionsController.create(request, response);
});
router.put("/concessions/update/:id", (request, response) => {
    ConcessionsController_1.concessionsController.update(request, response);
});
router.delete("/concessions/delete/:id", (request, response) => {
    ConcessionsController_1.concessionsController.delete(request, response);
});
//Voir toutes les mines d'une concession
router.get("/concessions/show/mines/:id", (request, response) => {
    ConcessionsController_1.concessionsController.showMines(request, response);
});
//Voir tous les contacts d'une concession
router.get("/concessions/show/contacts/:id", (request, response) => {
    ConcessionsController_1.concessionsController.showContacts(request, response);
});
