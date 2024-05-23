import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbname: process.env.dbname,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("error connecting to database" + err);
    });
};
