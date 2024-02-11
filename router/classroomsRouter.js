import express from "express";
import * as Controller from "../controllers/classroomsController.js";

const router = express.Router();

router.get("/", Controller.getAllClassrooms);

router.get("/:id", Controller.getClassroomById);

router.post("/", Controller.createClassroom);

router.put("/:id", Controller.updateClassroom);

router.delete("/:id", Controller.deleteClassroom);

export default router;
