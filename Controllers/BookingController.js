import BookingModel from "../Models/BookingModel.js";
import CarModel from "../Models/CarModel.js";

const bookingCar = async (req, res) => {
  try {
    const newBooking = new BookingModel(req.body);
    await newBooking.save();
    const car = await CarModel.findOne({ _id: req.body.car });
    car.bookedTimeSlots.push(req.body.bookingTimeSlots);
    await car.save();
    res.status(201).json("Đặt xe thành công");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const BookingController = {
  bookingCar,
};
