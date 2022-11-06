import { sendSuccessResponse, sendErrorResponse } from "../utils/sendResponse";
const logger = require("../utils/logger");
const DB = require("../models");
const Users = DB.users;

exports.getUsers = async (req, res) => {
  try {
    logger.info("Inside get home route!");
    let userDetails = await Users.findOne({});
    await sendSuccessResponse(res, { data: userDetails });
  } catch (error) {
    logger.error(`Error : ${error},Request : ${req.originalUrl}`);
    await sendErrorResponse(res, { error: "Some error occured" });
  }
};
