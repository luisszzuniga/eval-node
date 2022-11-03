"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concessionsController = void 0;
const Concession_1 = require("../models/Concession");
const Contact_1 = require("../models/Contact");
const Mine_1 = require("../models/Mine");
const CrudController_1 = require("./CrudController");
class ConcessionsController extends CrudController_1.CrudController {
    all(request, response) {
        Concession_1.Concession.findAll()
            .then((concessions) => {
            response.json(concessions);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer les concessions." });
        });
    }
    show(request, response) {
        Concession_1.Concession.findOne({ where: { id: request.params.id } })
            .then((concession) => {
            response.json(concession);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer la concession." });
        });
    }
    create(request, response) {
        Concession_1.Concession.create(request.body)
            .then((concession) => {
            response.json(concession);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de créér la concession." });
        });
    }
    update(request, response) {
        Concession_1.Concession.update(request.body, { where: { id: request.params.id } })
            .then((result) => {
            if (result[0]) {
                response.json({ "success": "Concession mise à jour avec succès." });
                return;
            }
            response.json({ "error": "Impossible de mettre à jour la concession." });
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de mettre à jour la concession." });
        });
    }
    delete(request, response) {
        Concession_1.Concession.destroy({ where: { id: request.params.id } })
            .then(() => {
            response.json({ "success": "Concession supprimée avec succès" });
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de supprimer la concession." });
        });
    }
    showMines(request, response) {
        Mine_1.Mine.findAll({ where: { concession_id: request.params.id } })
            .then((mines) => {
            response.json(mines);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer les mines associées à cette concession." });
        });
    }
    showContacts(request, response) {
        Contact_1.Contact.findAll({ where: { concession_id: request.params.id } })
            .then((contacts) => {
            response.json(contacts);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer les contacts de cette concession." });
        });
    }
    showAll(request, response) {
        Concession_1.Concession.findOne({ where: { id: request.params.id }, include: [Mine_1.Mine, Contact_1.Contact] })
            .then((concession) => {
            response.json(concession);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer la concession, ses mines et ses contacts" });
        });
    }
}
exports.concessionsController = new ConcessionsController;
