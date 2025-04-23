import express from "express";
import path from "path";
import cors from 'cors';
import convertRoute from "./api/routes/convert.route"; 
import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// local folder for downloads
app.use("/downloads", express.static(path.join(__dirname, "..", "downloads")));

// cors
app.use(cors());

// Routes
app.use("/api/convert", convertRoute);

// Error Handler
app.use(errorHandler);

export default app;
