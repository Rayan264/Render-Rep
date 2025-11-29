const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Your Automation AI Agent server is running!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started...");
});
