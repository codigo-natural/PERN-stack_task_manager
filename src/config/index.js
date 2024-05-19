import { config } from "dotenv";
config()

export const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

console.log(db)
export const PORT = process.env.PORT || 3000;