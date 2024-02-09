const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const dbPassword = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: dbPassword,
    database: "dashboard",
});

const app = express();
const port = 3000;

app.get("/replacements", (req, res) => {
    connection.query(
        "SELECT * FROM replacements",
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
