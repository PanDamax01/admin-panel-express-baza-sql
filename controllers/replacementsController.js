import Replacement from "../models/ReplacementModel.js";

export const index = async (req, res) => {
    try {
        const replacements = await Replacement.findAll();
        res.json(replacements);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while querying the database",
        });
    }
};
