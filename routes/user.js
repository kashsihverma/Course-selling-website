const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Your are now signup!",
  });
});

userRouter.post("/signin", (req, res) => {});

userRouter.get("/purchases", (req, res) => {});
module.exports = {
  userRouter,
};
