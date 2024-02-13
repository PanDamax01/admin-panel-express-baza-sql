import Classroom from "../models/ClassroomModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const classroomController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Classroom.findAll());
        } catch (err) {
            next(err);
        }
    },

    showClassroom: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Classroom, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await Classroom.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const header = await checkResourceExists(Classroom, req.params.id);
            await header.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const header = await checkResourceExists(Classroom, req.params.id);
            await header.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};
