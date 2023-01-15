const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
  //   res.status(200).json({ message: "User List" });
});

router.post("/", (req, res) => {
  res.json({ message: "create new user" });
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: `Get user with id: ${req.params.id}` });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "User updated" });
});

router.delete("/delete/:id", (req, res) => {
  res.status(200).json({ message: "User deleted" });
});

module.exports = router;
