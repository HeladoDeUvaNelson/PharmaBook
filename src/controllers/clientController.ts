import { Controller, Clients} from "../models/controller.model";

import Express from "express";

const clientController: Controller = {
    clients: (req: Express.Request, res: Express.Response) => {
        let dbRes: Clients = [
                {
                    lastName: "foo", 
                    firstName: "bar",
                    dni: "xx.xxx.xxx",
                    dateOfBirth: {day: 3, month: 5, year: 2001},
                    address: "foobarStreetXx",
                    phone: [9999999999],
                    receipt: [
                        {
                            receipt: {code: 802, compound: "Aciclovir", route: "Comprimidos", dose: 400, unit: "x30"},
                            receiptDate: {day: 19, month: 7, year: 2024}
                        }
                    ]
                }
            ];

        return res.send(JSON.stringify(dbRes));
    },
};

export default clientController;