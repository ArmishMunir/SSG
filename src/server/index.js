const express = require("express");
const path = require("path");
const prerender = require("prerender-node");

const app = express();

app.use(prerender.set("prerenderToken", "crh8FQZQUPCBG25yPE5L"));
// app.use(prerender);

// app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "build", "index.html"));
  res.send("Hello World");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
