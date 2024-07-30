import express from "express";
import { Collection, Course } from "./mongo.js";
import cors from "cors";
import bodyParser from "body-parser";

var app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const check = await Collection.findOne({
      username: username,
      password: password,
    });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    res.json("not exist");
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const data = {
    username: username,
    password: password,
  };

  try {
    const check = await Collection.findOne({
      username: username,
      password: password,
    });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exixt");
      await Collection.insertMany([data]);
    }
  } catch (error) {
    res.json("not exist");
  }
});

app.get("/courses-list", async (req, res) => {
  const check = await Course.find({});
  res.send({ records: check });
});

app.post("/add-courses", async (req, res) => {
  const data = req.body;
  const course = data?.course;
  const topic = data?.topic;
  const url = data?.url;
  const check = await Course.insertMany([
    {
      course: course,
      topic: topic,
      url: url,
    },
  ]);

  const payload = {
    _id: check?.[0]?._id,
    message: "Data inserted successfully.",
  };
  res.send(payload);
});

app.listen(port, () => {
  console.log(`port connected ${port}`);
});
