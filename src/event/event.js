import { client } from "../db.js";

export const event = client.db("test").collection("event");
