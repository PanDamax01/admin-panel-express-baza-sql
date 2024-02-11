import express from "express";
import cors from "cors";
import db from "./db.js";
import { appConfig } from "./config/config.js";
import replacementsRouter from "./router/replacementsRouter.js";
import classroomsRouter from "./router/classroomsRouter.js";

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

app.use("/replacements", replacementsRouter);
app.use("/classrooms", classroomsRouter);

app.listen(appConfig.port, () => {
    console.log(`Serwer działa na http://localhost:${appConfig.port}`);
});
