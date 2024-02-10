import express from "express";
import * as Controller from "../controllers/replacementsController.js";

const router = express.Router();

router.get("/replacements", Controller.getAllReplacements);

router.get("/replacements/:id", Controller.getReplacementById);

router.post("/replacements", Controller.createReplacement);

router.put("/replacements/:id", Controller.updateReplacement);

router.delete("/replacements/:id", Controller.deleteReplacement);

export default router;
