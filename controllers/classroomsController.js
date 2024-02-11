import Classroom from "../models/ClassroomModel.js";

export const getAllClassrooms = async (req, res) => {
    try {
        const classroom = await Classroom.findAll();
        res.json(classroom);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while querying the database",
        });
    }
};
export const getClassroomById = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id);
        if (classroom) {
            res.json(classroom);
        } else {
            res.status(404).json({ error: "Classroom not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while querying the database",
        });
    }
};
export const createClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.create(req.body);
        res.status(201).json(classroom);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred while creating the classroom",
        });
    }
};
export const updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id);
        if (classroom) {
            await classroom.update(req.body);
            res.json(classroom);
        } else {
            res.status(404).json({ error: "Classroom not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while updating the classroom",
        });
    }
};
export const deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id);
        if (classroom) {
            await classroom.destroy();
            res.json({ message: "Classroom deleted successfully" });
        } else {
            res.status(404).json({ error: "Classroom not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred while deleting the classroom",
        });
    }
};
