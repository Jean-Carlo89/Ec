import express from "express";
import cors from "cors";
import { MainRouter } from "./routes/main.router";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", MainRouter);

export { app };
