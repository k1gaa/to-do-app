import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getTask, rmTask, updateTask } from "./routes/todo.js";
import cookieParser from "cookie-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

getTask(app);
rmTask(app);
updateTask(app);

const port = 3000 || process.env.port;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});
