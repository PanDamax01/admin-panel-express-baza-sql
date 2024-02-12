import Replacement from "../models/ReplacementModel.js";

export const replacementController = {
    index: async (req, res) => {
        try {
            const replacements = await Replacement.findAll();
            res.json(replacements);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while querying the database",
            });
        }
    },
    showReplacement: async (req, res) => {
        try {
            const replacement = await Replacement.findByPk(req.params.id);
            if (replacement) {
                res.json(replacement);
            } else {
                res.status(404).json({ error: "Replacement not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while querying the database",
            });
        }
    },
    create: async (req, res) => {
        try {
            const replacement = await Replacement.create(req.body);
            res.status(201).json(replacement);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while creating the replacement",
            });
        }
    },
    update: async (req, res) => {
        try {
            const replacement = await Replacement.findByPk(req.params.id);
            if (replacement) {
                await replacement.update(req.body);
                res.json(replacement);
            } else {
                res.status(404).json({ error: "Replacement not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while updating the replacement",
            });
        }
    },
    delete: async (req, res) => {
        try {
            const replacement = await Replacement.findByPk(req.params.id);
            if (replacement) {
                await replacement.destroy();
                res.json({ message: "Replacement deleted successfully" });
            } else {
                res.status(404).json({ error: "Replacement not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while deleting the replacement",
            });
        }
    },
};