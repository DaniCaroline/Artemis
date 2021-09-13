require('dotenv').config()

const status = require('http-status');
const express = require('express');
const routes = require('./infra/index');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./infra/swagger/swagger.json');
const app = express();
const PORT = 8000;



app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(routes);

app.get('/', (_req, res) => {
    res.redirect(status.PERMANENT_REDIRECT, '/docs');
  });

app.listen(PORT, () => console.log(`server up on http://localhost:${PORT}`));