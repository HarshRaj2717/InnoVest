import { marketplace } from "./schema.js";

export const postStartup = async (req, res) => {};

export const getStartup = async (req, res) => {
  res.json({
    working: true,
  });
};
