import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kasim26:kasim26@kasim26.mvxbhcy.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
