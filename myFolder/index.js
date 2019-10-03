var express = require('express');
const app = express();
var adsRouter = require('./adsRouter');
const port = 8000;

app.use('/ads', adsRouter);




app.listen(port, console.log(`app started ${port}`));