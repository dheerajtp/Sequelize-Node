import express from "express";
const userRouter = require("./userRoute");

export default (app) => {
  app.use(express.json());
  app.use("/api/v1/user", userRouter);
};
