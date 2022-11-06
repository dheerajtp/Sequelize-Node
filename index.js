import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import route from "./route/index";

const PORT = process.env.PORT || 5000;
const app = express();

route(app);

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
