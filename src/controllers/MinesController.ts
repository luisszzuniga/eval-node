import { Request, Response } from "express";
import { CrudController } from "./CrudController";

class MinesController extends CrudController
{
    all(request: Request, response: Response)
    {

    }

    show(request: Request, response: Response)
    {

    }

    create(request: Request, response: Response)
    {

    }

    update(request: Request, response: Response)
    {

    }

    delete(request: Request, response: Response)
    {
        
    }
}

export const minesController = new MinesController;