const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();

app.use(express.json());
let allowedOrigins = process.env.BASE_URL.split(",");
const options = (req, res) => {
  let tmp;
  let origin = req.header("Origin");
  if (allowedOrigins.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    tmp = {
      origin: "Origin Not Existing",
    };
  }
  res(null, tmp);
};
app.use(cors(options));

// Routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// Database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!"))
  .catch((err) => console.log("Error connecting to database", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
