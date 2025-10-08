import express from "express";

const router = express.Router();
router.get("/login", (req, res) => {
  res.send("login request");
});
router.get("/signup", (req, res) => {
  res.send("signup request");
});
router.get("/logout", (req, res) => {
  res.send("logout request");
});
export default router;
