import mongoose, { Schema, Document } from "mongoose";
import { Ipost } from "./postSchema";

interface IUser extends Document {
  name: string;
  postsL: Ipost["_id"];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export default mongoose.model<IUser>("User", UserSchema);
