import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CarSchema = new Schema({
  name: { type: String },
  image: { type: String },
  rentPerHour: { type: Number },
  fuelType: { type: String },
  bookedTimeSlots: [
    {
      from: { type: String },
      to: { type: String },
    },
  ],
  capacity: Number,
});

export default mongoose.model("Cars", CarSchema);
