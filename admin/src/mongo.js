import mongoose from "mongoose";

mongoose

  .connect(
    "mongodb+srv://tanaydalawat:abbadabbajabba@cluster-new.opyhmgk.mongodb.net/E-learn"
  )
  // .connect("mongodb://localhost:27017/e-learning-admin")
  .then(() => {
    console.log("mongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const collectionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("course", courseSchema);

const Collection = mongoose.model("User", collectionSchema);

export { Collection, Course };
