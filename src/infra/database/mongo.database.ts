import { MongoClient } from "mongodb";
import { Database } from "./database.interface";

let connection: MongoClient;
const url = process.env.DATABASE_URL;

export async function connect() {
  try {
    console.log("Connecting to database...");

    const client = new MongoClient(process.env.DATABASE_URL as string);

    connection = await client.connect();

    console.log("Connected to Db");
    process.on("SIGINT", async () => {
      try {
        await connection.close();
        console.log("connection to database closed");
      } catch (e) {
        console.error(e);
      }
    });

    return connection;
  } catch (e) {
    console.error("Error connecting to Db");
    console.error(e);
  }
}

export function get_connection() {
  return connection;
}
