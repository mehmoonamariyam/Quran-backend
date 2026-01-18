const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const { courseRouter } = require("./routes/courseRouter");
const { tutorRouter } = require("./routes/tutorsRouter");
const { authRouter } = require("./routes/authRouter");
const { reviewRouter } = require("./routes/reviewRouter");
const { enrollRouter } = require("./routes/enrollRouter");
const { userRouter } = require("./routes/userRouter");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api/courses", courseRouter);
app.use("/api/tutors", tutorRouter);
app.use("/api/auth", authRouter); // ✅ FIXED
app.use("/api/reviews", reviewRouter);
app.use("/api/free-trial", enrollRouter);
app.use("/api/users", userRouter);


/* ================= DB CONNECTION ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => console.log("❌ MongoDB Error:", error));

/* ================= HOME ================= */
app.get("/", (req, res) => {
  res.send("Homepage");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
