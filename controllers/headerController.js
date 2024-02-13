import Header from "../models/HeaderModel.js";

export const headerController = {
    index: async (req, res) => {
        try {
            const header = await Header.findAll();
            res.json(header);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while querying the database",
            });
        }
    },
    showHeader: async (req, res) => {
        try {
            const header = await Header.findByPk(req.params.id);
            if (header) {
                res.json(header);
            } else {
                res.status(404).json({ error: "Header not found" });
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
            const header = await Header.create(req.body);
            res.status(201).json(header);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while creating the header",
            });
        }
    },
    update: async (req, res) => {
        try {
            const header = await Header.findByPk(req.params.id);
            if (header) {
                await header.update(req.body);
                res.json(header);
            } else {
                res.status(404).json({ error: "header not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while updating the header",
            });
        }
    },
    delete: async (req, res) => {
        try {
            const header = await Header.findByPk(req.params.id);
            if (header) {
                await header.destroy();
                res.json({ message: "Header deleted successfully" });
            } else {
                res.status(404).json({ error: "Header not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while deleting the header",
            });
        }
    },
};
