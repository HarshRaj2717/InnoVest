import express from "express";
import { postStartup, getStartup } from "../marketplace.js";

const marketplacerouter = express.Router();
marketplacerouter.post("/post", postStartup);
marketplacerouter.get("/get", getStartup);

export default marketplacerouter;
