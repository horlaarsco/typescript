import express from "express";
import { addPost, getPosts, addUser, getUsers, getUser } from "./controller";

const router = express.Router();

router.post("/add", addPost);
router.get("/", getPosts);

router.get("/user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);

export default router;
