import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Cars" },
    bookingTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    tongGio: { type: Number },
    tongtien: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Bookings", BookingSchema);
