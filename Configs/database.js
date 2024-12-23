import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://machngocxuan2004:gWcq8rIx8Bje5vts@trello-web.pcrr73y.mongodb.net/booking-car"
    );

    console.log("Kết nối thành công tới MongoDB");
  } catch (error) {
    console.error("Lỗi kết nối tới MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
