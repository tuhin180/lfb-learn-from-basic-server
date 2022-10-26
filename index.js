const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;

const courses = require("./data/courses.json");
const courseDetails = require("./data/course-details.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course", (req, res) => {
  res.send(courseDetails);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;

  const getSingleCourse = courseDetails?.find((c) => c.id == id);
  if (!getSingleCourse) {
    res.send("course not available");
  } else {
    res.send(getSingleCourse);
  }
});
app.listen(port, () => {
  console.log("server is running ", port);
});

module.exports = app;
