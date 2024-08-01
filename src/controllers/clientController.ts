import { Controller, Clients} from "../models/controller.model";

import Express from "express";

const indexController: Controller = {
    clients: (req: Express.Request, res: Express.Response) => {
        let dbRes: Clients = [
                {
                    lastName: "foo", 
                    firstName: "bar",
                    dni: "xx.xxx.xxx",
                    dateOfBirth: {day: 3, month: 5, year: 2001},
                    address: "foobarStreetXx",
                    phone: 9999999999,
                    pharmaceutical: {code: 802, compound: "Aciclovir", route: "Comprimidos", dose: 400},
                    receiptDate: [{day: 2, month: 7, year: 2024}],
                }
            ];

        return res.send(JSON.stringify(dbRes));
    },
};

export default indexController;