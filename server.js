require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,

        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB is connected...");
    })
    .catch((e) => console.log("Db is not connected..." + e));

app.get("/", (req, res) => {
    res.contentType("application/json");
    res.json({
        msg: "This is root route...",
    });
});

app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);