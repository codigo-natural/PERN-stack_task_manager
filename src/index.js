import express from "express";
import morgan from "morgan";

import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

app.listen(3000);
console.log("server on port 3000");
