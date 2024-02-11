import express from "express";
import * as Controller from "../controllers/replacementsController.js";

const router = express.Router();

router.get("/", Controller.getAllReplacements);

router.get("/:id", Controller.getReplacementById);

router.post("/", Controller.createReplacement);

router.put("/:id", Controller.updateReplacement);

router.delete("/:id", Controller.deleteReplacement);

export default router;
