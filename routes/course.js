const { Router } = require("express");

const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
  res.json({
    msg: "Here are your list of courses",
  });
});

courseRouter.post("/purchase", (req, res) => {});

module.exports = {
  courseRouter,
};
