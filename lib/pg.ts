import { Pool } from "pg";
const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const connectDB = () => {
    if (!PGHOST || !PGPORT || !PGDATABASE || !PGUSER || !PGPASSWORD) {
        throw new Error("Missing required environment variables for PostgreSQL connection.");
    }
    let db: Pool | undefined = undefined;
    if (!db) {
        db = new Pool({
            host: PGHOST,
            port: PGPORT as unknown as number,
            database: PGDATABASE,
            user: PGUSER,
            password: PGPASSWORD,
        });
    }

    return db;
};

const db = connectDB();

export default db;
