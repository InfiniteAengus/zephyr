import http from "http";
import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

import guestRouter from "./src/routes/guest.route";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "")));
app.use("/", guestRouter);

const port = 7000;
server.listen(port, () => console.log(`Server started on ${port}`));
