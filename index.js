const express = require("express");
const { default: mongoose } = require("mongoose");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

await mongoose.connect(
  "mongodb+srv://kashish1997verma:J4SGW6FfrLBreDUc@cluster0.pphjx.mongodb.net/coursera-app"
);
const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

app.listen(3000);
