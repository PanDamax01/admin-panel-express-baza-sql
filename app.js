import express from "express";
import cors from "cors";
import db from "./db.js";
import { appConfig } from "./config/config.js";
import replacementRouter from "./router/replacementRouter.js";
import classroomRouter from "./router/classroomRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

try {
    await db.authenticate();
    console.log(
        "Connection to the database has been established successfully."
    );
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.use("/replacements", replacementRouter);
app.use("/classrooms", classroomRouter);

app.listen(appConfig.port, () => {
    console.log(`Serwer działa na http://localhost:${appConfig.port}`);
});
