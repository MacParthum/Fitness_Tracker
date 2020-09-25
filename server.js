const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("tiny"))

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
app.use(require("./controller/html-controller"));
app.use(require("./controller/api-controller"));


app.listen(PORT, () => {
    console.log(`app running onport ${PORT}!`);
});