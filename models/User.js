const mongoose = require("mongoose");
const { v4 , uuidv4 } = require("uuid");

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "tblusers",
  }
);

export default mongoose.model("User", userSchema);
