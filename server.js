const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call routes.js
var routes = require('./routes')
routes(app);   


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
}); 