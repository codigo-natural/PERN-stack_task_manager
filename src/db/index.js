import pg from "pg"
import { db } from "../config/index.js";
import { PORT } from "../config/index.js";

export const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  database: db.database, 
  password: db.password,
  port: PORT
});


