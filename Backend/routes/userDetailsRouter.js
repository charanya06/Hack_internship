const express = require('express');
const bodyParser = require('body-parser');

const userDetails = require('../models/userDetails');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
    .get((req, res, next) => {
        userDetails.find({})
            .then((details) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        userDetails.create(req.body)
            .then((details) => {
                console.log('User Details Created ', details);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /userDetails');
    })

module.exports = userRouter;