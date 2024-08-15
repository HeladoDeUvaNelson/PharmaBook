import { Controller, Clients} from "../models/controller.model";

import Express from "express";

const clientController: Controller = {
    clients: (req: Express.Request, res: Express.Response) => {
        let dbRes: Clients = "a";

        return res.send(JSON.stringify(dbRes));
    },
};

export default clientController;