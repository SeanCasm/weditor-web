const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Base data online");
  } catch (err) {
    console.log(err);
    throw new Error("Failed database connection");
  }
};

module.exports = dbConnection;
