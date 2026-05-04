import mongoose, { Schema } from "mongoose";
import bycrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 30,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);



 //before saving any password to the database we will hash it using bcrypt

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
    this.password = await bycrypt.hash(this.password, 10);

    next();
  });


// compare passwords

userSchema.methods.comparePassword = async function (Password) {
  return await bycrypt.compare(Password, this.password);
};
export const User = mongoose.model("User", userSchema);