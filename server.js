const express = require("express");
const faceCountRouter = require("./face_count");
const speechBrightnessRouter = require("./class_quality");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", faceCountRouter);
app.use("/api", speechBrightnessRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
