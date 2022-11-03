"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
const Auth = __importStar(require("../middlewares/authenticate"));
//Controllers
const MinesController_1 = require("../controllers/MinesController");
const ConcessionsController_1 = require("../controllers/ConcessionsController");
const UsersController_1 = require("../controllers/UsersController");
//Mines
router.get("/mines", (request, response) => {
    MinesController_1.minesController.all(request, response);
});
router.get("/mines/show/:id", (request, response) => {
    MinesController_1.minesController.show(request, response);
});
router.post("/mines/add", (Auth.authorize(['admin'])), (request, response) => {
    MinesController_1.minesController.create(request, response);
});
router.put("/mines/update/:id", (Auth.authorize(['admin'])), (request, response) => {
    MinesController_1.minesController.update(request, response);
});
router.delete("/mines/delete/:id", (Auth.authorize(['admin'])), (request, response) => {
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
router.post("/concessions/add", (Auth.authorize(['admin'])), (request, response) => {
    ConcessionsController_1.concessionsController.create(request, response);
});
router.put("/concessions/update/:id", (Auth.authorize(['admin'])), (request, response) => {
    ConcessionsController_1.concessionsController.update(request, response);
});
router.delete("/concessions/delete/:id", (Auth.authorize(['admin'])), (request, response) => {
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
//Voir la concession + ses contacts + ses mines
router.get("/concessions/all/:id", (request, response) => {
    ConcessionsController_1.concessionsController.showAll(request, response);
});
//Fin concessions
//Utilisateurs
router.post("/register", (request, response) => {
    UsersController_1.usersController.register(request, response);
});
router.post("/login", (request, response) => {
    UsersController_1.usersController.login(request, response);
});
