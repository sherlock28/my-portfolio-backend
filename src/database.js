const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(db => console.log("db is connected"))
  .catch(err => console.error(err));
