import { Request, Response } from "express";
import { Mine } from "../models/Mine";
import { CrudController } from "./CrudController";

class MinesController extends CrudController
{
    all(request: Request, response: Response)
    {
        Mine.findAll()
            .then((mines: Mine[]) => {
                response.json(mines);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les mines."});
            });
    }

    show(request: Request, response: Response)
    {
        Mine.findOne({where: {id: request.params.id}})
            .then((mine: Mine) => {
                response.json(mine);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer la mine."});
            });
    }

    create(request: Request, response: Response)
    {
        Mine.create(request.body)
            .then((newMine: Mine) => {
                response.json(newMine);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible d'ajouter la mine."})
            });
    }

    update(request: Request, response: Response)
    {
        Mine.update(request.body, {where: {id: request.params.id}})
            .then((result: Number[]) => {
                if (result[0]) {
                    response.json({"success": "Mine mise à jour avec succès."});
                    return;
                }

                response.json({"error": "Impossible de mettre à jour la mine."});
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de mettre à jour la mine."})
            });
    }

    delete(request: Request, response: Response)
    {
        Mine.destroy({where: {id: request.params.id}})
            .then(() => {
                response.json({"success": "La mine a bien été supprimée."});
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "La mine n'a pas pu être supprimée."});
            });
    }
}

export const minesController = new MinesController;