import pg from "pg"

export const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tasksdb', 
  password: 'admin123',
  port: 5432,
});


