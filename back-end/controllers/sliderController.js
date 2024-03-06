import Slider from "../models/SliderModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";
import fs from "fs";

export const sliderController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Slider.findAll());
        } catch (err) {
            next(err);
        }
    },

    showSlider: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Slider, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const sliderData = req.body;

            if (req.file) {
                sliderData.img_slider = `uploads/${req.file.filename}`;
            }

            res.status(201).json(await Slider.create(sliderData));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const slider = await checkResourceExists(Slider, req.params.id);

            if (req.file) {
                if (slider.img_slider) {
                    fs.unlinkSync(slider.img_slider);
                }
                req.body.img_slider = `uploads/${req.file.filename}`;
            }

            await slider.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const slider = await Slider.findByPk(req.params.id);
            let fileExists = false;

            if (!slider) {
                return res.status(404).json({ message: "Slider not found" });
            }

            try {
                fs.accessSync(slider.img_slider);
                fileExists = true;
            } catch (error) {
                if (error.code !== "ENOENT") {
                    throw error;
                }
            }

            if (fileExists) {
                await fs.promises.unlink(slider.img_slider);
            }

            await slider.destroy();

            res.json({ message: "Slider deleted" });
        } catch (error) {
            next(error);
        }
    },
};
