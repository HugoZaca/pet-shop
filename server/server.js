const express = require("express");

const app = express();

app.listen(8080);

app.get("/", (req, res) => {
  console.log("Generic Request");
  res.status(200).json({ message: "Success!" });
});

app.get("/cart", (req, res) => {
  res.status(200).json({ products: 2 });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);
