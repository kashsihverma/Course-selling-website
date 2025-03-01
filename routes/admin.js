const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Your are now signup!",
  });
});

adminRouter.post("/signin", (req, res) => {});

module.exports = {
  adminRouter,
};
