const mongoose = require("mongoose");
require('dotenv').config({path:"./config/.env"})

mongoose
  .connect(
    `mongodb+srv://dav-dev:${process.env.PASSWORD}@cluster0.2kwyz.mongodb.net/socialNetDB`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
