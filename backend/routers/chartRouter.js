import expressAsyncHandler from "express-async-handler";
import Chart from "../models/chartModel.js";
import express from 'express';
import { isAuth } from "../misc.js";
import foodRouter from "./foodRouter.js";


const chartRouter = express.Router()

chartRouter.post('/createChart', isAuth, expressAsyncHandler(async (req, res) => {

    //diet chart to be created...


}))

export default chartRouter