const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const workout = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./controller/html-controller.js"));
app.use(require("./controller/api-controller.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, 

useNewUrlParser: true;
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,

});

app.use(require(""))
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


