import { DataTypes, Model } from "sequelize";
import db from "../db.js";

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        admin: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        login: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "user",
        tableName: "users",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default User;
