import express from "express";
import { CarController } from "../Controllers/CarController.js";

const router = express.Router();

router.route("/car/new").post(CarController.createCar);
router.route("/cars/getAllCar").get(CarController.getAllCar);

export const carRouter = router;
