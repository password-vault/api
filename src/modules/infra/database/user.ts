import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwords: {
    type: [
      {
        name: { type: String, required: true },
        password: { type: String, required: true },
      },
    ],
    default: [],
  },
});

export default mongoose.model("User", userSchema);
