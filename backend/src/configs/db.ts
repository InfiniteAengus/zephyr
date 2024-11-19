import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { DB_URL } from "./env";

import { Pool } from "pg";

const pool = new Pool({
  connectionString: DB_URL,
});

const db = drizzle(pool, { schema });

export default db;
