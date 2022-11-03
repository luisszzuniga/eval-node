import { Request, Response } from "express";
import { Concession } from "../models/Concession";
import { Contact } from "../models/Contact";
import { Mine } from "../models/Mine";
import { CrudController } from "./CrudController";

class ConcessionsController extends CrudController
{
    all(request: Request, response: Response)
    {
        Concession.findAll()
            .then((concessions: Concession[]) => {
                response.json(concessions);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les concessions."});
            });
    }

    show(request: Request, response: Response)
    {
        Concession.findOne({where: {id: request.params.id}})
            .then((concession: Concession) => {
                response.json(concession);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer la concession."});
            })
    }

    create(request: Request, response: Response)
    {
        Concession.create(request.body)
            .then((concession: Concession) => {
                response.json(concession);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de créér la concession."}); 
            })
    }

    update(request: Request, response: Response)
    {
        Concession.update(request.body, {where: {id: request.params.id}})
            .then((result: Number[]) => {
                if (result[0]) {
                    response.json({"success": "Concession mise à jour avec succès."});
                    return;
                }

                response.json({"error": "Impossible de mettre à jour la concession."});
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de mettre à jour la concession."});
            });
    }

    delete(request: Request, response: Response)
    {
        Concession.destroy({where: {id: request.params.id}})
            .then(() => {
                response.json({"success": "Concession supprimée avec succès"});
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de supprimer la concession."});
            });
    }

    showMines(request: Request, response: Response)
    {
        Mine.findAll({where: {concession_id: request.params.id}})
            .then((mines: Mine[]) => {
                response.json(mines);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les mines associées à cette concession."});
            });
    }

    showContacts(request: Request, response: Response)
    {
        Contact.findAll({where: {concession_id: request.params.id}})
            .then((contacts: Contact[]) => {
                response.json(contacts);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les contacts de cette concession."});
            });
    }

    showAll(request: Request, response: Response)
    {
        Concession.findOne({where: {id: request.params.id}, include: [Mine, Contact]})
            .then((concession: Concession) => {
                response.json(concession);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer la concession, ses mines et ses contacts"});
            });
    }
}

export const concessionsController = new ConcessionsController;