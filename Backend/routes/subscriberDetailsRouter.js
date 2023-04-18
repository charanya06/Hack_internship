const express = require('express');
const bodyParser = require('body-parser');

const subscriberDetails = require('../models/subscriberDetails');

const subscriberRouter = express.Router();

subscriberRouter.use(bodyParser.json());

subscriberRouter.route('/')
    .get((req, res, next) => {
        subscriberDetails.find({})
            .then((details) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        console.log(req);
        subscriberDetails.create(req.body)
            .then((details) => {
                console.log('Subscriber Emails Created ', details);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /subscriberDetails');
    })

module.exports = subscriberRouter;