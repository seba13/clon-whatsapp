import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: join(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(join(__dirname, "./public")));

app.listen(port, () => {
  console.log("servidor escuchando en puerto " + port);
});
