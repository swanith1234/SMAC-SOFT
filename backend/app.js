import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userrouter.js";
import { dbConnection } from "./databases/dbConnection.js";
import applicationRouter from "./routes/applicationrouter.js";
import jobRouter from "./routes/jobrouter.js";
import employerRouter from "./routes/employerrouter.js";
import { errorMiddleware } from "./middllewares/error.js";
import bodyParser from "body-parser";
import { employerregister } from "./controller/employerController.js";
import eventRouter from "./routes/eventrouter.js";
import potdrouter from "./routes/potdrouter.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use(cookieParser()); //used for parsing the cookies which hrlps in the authirization of user
app.use(express.json()); //used to parse the JSON type content that is being sent from the client to server

app.use(express.urlencoded({ extended: true })); //it parses the information present in the url
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.use("/api/v1", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1", employerRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1", potdrouter);

dbConnection();
app.use(errorMiddleware);

export default app;
