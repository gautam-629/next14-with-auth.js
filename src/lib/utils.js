// import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if(connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "next_auth", // Replace with your actual database name
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error);
  }
};

// Usage example:
// Make sure to replace "your-database-name" with your actual database name
// process.env.MONGO_LOCAL should be set to your local MongoDB connection string
// e.g., "mongodb://localhost:27017/your-database-name"
