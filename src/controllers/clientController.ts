import { Controller, Clients} from "../models/controller.model";

import Express from "express";

const indexController: Controller = {
    clients: (req: Express.Request, res: Express.Response) => {
        let dbRes: Clients = [
                {
                    lastFirstName: "foo1", 
                    dni: "xx.xxx.xxx",
                    dateOfBirth: {day: 3, month: 5, year: 2001},
                    pharmaceutical: {compound: "Chloramphenicol"},
                    receiptDate: [{day: 2, month: 7, year: 2024}],
                }
            ];

        return res.send(JSON.stringify(dbRes));
    },
};

export default indexController;