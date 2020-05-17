import { Request, Response } from "express";
import Post from "./postSchema";
import User from "./userSchema";

export const addPost = async (req: Request, res: Response) => {
  const post = await Post.create(req.body);
  res.json(post);
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find();
  res.json(posts);
};

export const addUser = async (req: Request, res: Response) => {
  const post = await User.create({
    name: "Olas",
    posts: ["5ec1228504dbec4d29bdb234", "5ec12a68965a8358b3b1770e"],
  });
  res.json(post);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find().populate({ path: "posts" });
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id).populate({ path: "posts" });
  res.json(user);
};
