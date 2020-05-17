import express, { Application } from "express";
import bodyParser from "body-parser";
import db from "./connect";
import router from "./route";

const app: Application = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  db.on;
  console.log("Server Started");
});
