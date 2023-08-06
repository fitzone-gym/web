// db/mysql.ts

import mysql, { Pool } from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // Leave it empty for no password
  database: "fitzone",
};

const pool: Pool = mysql.createPool(dbConfig);

export default pool;
