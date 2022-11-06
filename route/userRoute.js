import express from "express";
import controller from "../controller/index";

const router = express.Router();

router.get("/", controller.userController.getUsers);

module.exports = router;
