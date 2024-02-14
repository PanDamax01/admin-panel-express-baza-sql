import User from "../models/UserModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const userController = {
    index: async (_req, res, next) => {
        try {
            res.json(await User.findAll());
        } catch (err) {
            next(err);
        }
    },

    showUser: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(User, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await User.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const user = await checkResourceExists(User, req.params.id);
            await user.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const user = await checkResourceExists(User, req.params.id);
            await user.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};
