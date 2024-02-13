import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getTask } from "./routes/todo.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

getTask(app);

const port = 3000 || process.env.port;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});
