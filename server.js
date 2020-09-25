const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"))
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    useCreateIndex:     true,
    useFindAndModify:   false,
    
});

app.use(require("./controller/html-controller"));
app.use(require("./controller/api-controller"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


