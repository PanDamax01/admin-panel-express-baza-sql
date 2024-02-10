import express from "express";
import { index } from "../controllers/replacementsController.js";

const router = express.Router();

router.get("/replacements", index);

export default router;
