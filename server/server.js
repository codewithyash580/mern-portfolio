import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.get('/health',(req,res) =>{
    res.status(200).send('ok');
});

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });