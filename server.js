const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
// using morgan
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./controller/html-controller.js"));
app.use(require("./controller/api-controller"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, 


useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,

});

app.use(require(""))
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});






// https://mongoosejs.com/docs/connections.html
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     autoIndex: false, // Don't build indexes
//     poolSize: 10, // Maintain up to 10 socket connections
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
//   };
//   mongoose.connect(uri, options);

