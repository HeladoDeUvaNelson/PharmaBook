import {App, Port} from "./models/server.model"

import express from "express";
import dotenv from "dotenv";

import error from "./middleware/error";
import authMiddleware from "./middleware/auth";

import routersClient from "./routers/client";

import NotFoundError from "./classes/Errors/NotFoundError";

dotenv.config();

const app: App = express();
const PORT: Port = process.env.PORT;

app.use("/clients", authMiddleware, routersClient); 

app.use(() => { throw new NotFoundError("Not Found"); });

app.use(error);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: Error) => {
  // gracefully handle error
  throw new Error(error.message);
});