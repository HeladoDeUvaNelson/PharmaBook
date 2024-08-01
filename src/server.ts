import {App, Port} from "./models/server.model"

import express from "express";
import dotenv from "dotenv";

import routersClient from "./routers/client";

dotenv.config();

const app: App = express();
const PORT: Port = process.env.PORT;



app.use("/clients", routersClient); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: Error) => {
  // gracefully handle error
  throw new Error(error.message);
});