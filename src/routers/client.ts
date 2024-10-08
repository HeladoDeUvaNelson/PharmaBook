import express from "express";
import clientController from "../controllers/clientController";

const router = express.Router();

router.get('/', clientController.clients);

export default router;