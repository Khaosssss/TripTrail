import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import bookingRouter from "./routes/bookingRoute.js";

const PORT = process.env.PORT || 4000;
const app = express();

const allowedOrigins = ["https://travel-tide-six.vercel.app"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/bookings", bookingRouter);

app.get("/", (req, res) => {
  res.send("API is Working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
