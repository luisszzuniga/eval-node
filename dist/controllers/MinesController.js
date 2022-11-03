"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minesController = void 0;
const Mine_1 = require("../models/Mine");
const CrudController_1 = require("./CrudController");
class MinesController extends CrudController_1.CrudController {
    all(request, response) {
        Mine_1.Mine.findAll()
            .then((mines) => {
            response.json(mines);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer les mines." });
        });
    }
    show(request, response) {
        Mine_1.Mine.findOne({ where: { id: request.params.id } })
            .then((mine) => {
            response.json(mine);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer la mine." });
        });
    }
    create(request, response) {
        Mine_1.Mine.create(request.body)
            .then((newMine) => {
            response.json(newMine);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible d'ajouter la mine." });
        });
    }
    update(request, response) {
        Mine_1.Mine.update(request.body, { where: { id: request.params.id } })
            .then((result) => {
            if (result[0]) {
                response.json({ "success": "Mine mise à jour avec succès." });
                return;
            }
            response.json({ "error": "Impossible de mettre à jour la mine." });
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de mettre à jour la mine." });
        });
    }
    delete(request, response) {
        Mine_1.Mine.destroy({ where: { id: request.params.id } })
            .then(() => {
            response.json({ "success": "La mine a bien été supprimée." });
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "La mine n'a pas pu être supprimée." });
        });
    }
}
exports.minesController = new MinesController;
