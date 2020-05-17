import mongoose, { Schema, Document } from "mongoose";

export interface Ipost extends Document {
  title: string;
  body: string;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  body: { type: String, required: true },
});

export default mongoose.model<Ipost>("Post", PostSchema);
