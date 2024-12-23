import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CarSchema = new Schema({
  name: String,
  image: String,
  rentPerHour: Number,
  fuelType: String,
  bookedTimeSlots: [String],
  capacity: Number,
});

export default mongoose.model("Cars", CarSchema);
