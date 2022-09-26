const express = require("express");
require("dotenv-safe").config();
const app = express();
const port = 3000;
const userController = require("./controllers/users");
app.use(express.json());

app.get("/", (req, res) => res.send("Api vá de taxi"));
app.listen(port, () => console.log(`Running in http://localhost/${port}`));

app.post("/users/create", userController.createUser);
app.post("/login", userController.login);
