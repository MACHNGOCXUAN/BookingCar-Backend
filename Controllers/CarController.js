import CarModel from "../Models/CarModel.js";

const createCar = async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ message: "Failed to create car", error });
  }
};

const getAllCar = async (req, res) => {
  try {
    setTimeout(async () => {
      const cars = await CarModel.find();
      res.status(200).json(cars);
    }, 100);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const CarController = {
  createCar,
  getAllCar,
};
