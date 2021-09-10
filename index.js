require('dotenv').config()

const express = require("express");
const routes = require('./infra/index')
const app = express();
const PORT = 8000;

app.use(express.json())
app.use(routes);

app.listen(PORT, () => console.log(`server up on http://localhost:${PORT}`));