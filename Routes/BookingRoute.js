import express from "express";
import { BookingController } from "../Controllers/BookingController.js";

const router = express.Router();
router.route("/bookCar").post(BookingController.bookingCar);

export const BookingRouter = router;
