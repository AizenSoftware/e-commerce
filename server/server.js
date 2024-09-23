import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", userRoutes);
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server Listenin on port ${PORT}`);
});
