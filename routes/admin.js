const { Router } = require("express");
const { AdminModel } = require("../db");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    msg: "Your are now signup!",
  });
});

adminRouter.post("/signin", (req, res) => {});

adminRouter.post("/add/course", (req, res) => {});

adminRouter.get("/course/bulk", (req, res) => {});
module.exports = {
  adminRouter,
};
