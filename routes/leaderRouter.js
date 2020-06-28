const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.get((req,res,next) =>{
    res.end('will send all the leaders');
})
.post((req,res,next) =>{
    res.end('Will add the leaders: ' +req.body.name + ' with details: ' +req.body.description);
})
.put((req,res,next) =>{
     res.statusCode = 403;
     res.end('PUT operation not supported on /leaders');
})
.delete((req,res,next) =>{
    res.end('Deleting all the leaders!');
})

module.exports = leaderRouter;