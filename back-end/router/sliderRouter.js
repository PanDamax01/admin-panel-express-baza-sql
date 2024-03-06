import express from "express";
import { sliderController } from "../controllers/sliderController.js";
import upload from "../middlewares/multerMiddleware.js";

const router = express.Router();

router.get("/", sliderController.index);

router.get("/:id", sliderController.showSlider);

router.post("/", upload.single("file"), sliderController.create);

router.put("/:id", upload.single("file"), sliderController.update);

router.delete("/:id", upload.single("file"), sliderController.delete);

export default router;
