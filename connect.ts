import mongoose from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/local";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    return console.log(`Successfully connected to database`);
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });

let db = mongoose.connection;

export default db;
