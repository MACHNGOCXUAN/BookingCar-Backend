import express from "express";
import connectDB from "./Configs/database.js";
import { carRouter } from "./Routes/CarRoute.js";
import { UserRouter } from "./Routes/UserRoute.js";
import { BookingRouter } from "./Routes/BookingRoute.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

// Kết nối cơ sở dữ liệu
connectDB();

// Middleware để phân tích yêu cầu JSON
app.use(express.json());

// Sử dụng các route liên quan đến xe
app.use("/api/", carRouter);
app.use("/api/", UserRouter);
app.use("/api/booking", BookingRouter);

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
