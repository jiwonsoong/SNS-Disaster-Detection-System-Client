const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')
const app = express();
app.use(express.static('public'));
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.listen(3001,()=>{
    console.log('frontend server');
})

