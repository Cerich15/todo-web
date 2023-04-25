const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleWares/errorMiddleware");
const cors = require("cors");
const rateLimit = require('express-rate-limit');

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20
});

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.send("API is running..");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
//   console.log(notes)
// });


app.use('/api/', limiter);
app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
