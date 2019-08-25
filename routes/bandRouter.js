const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bands = require('../models/bands');

//declare bandRouter as an Express Router
const bandRouter = express.Router();

bandRouter.use(bodyParser.json());

//note that this is the /bands endpoint
bandRouter.route('/')
.get((req,res,next) => {
  Bands.find({})   //find ALL bands using mongoose find method
  .then((bands) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(bands); //takes in JSON string imports and returns JSON response to client
  }, (err) => next(err))
  .catch((err) => next(err));
})
//body of incoming json string request will be parsed by body-parser and added to the req object as req.body property
.post((req,res,next) => {
  Bands.create(req.body)
  .then((band) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(band);
  }, (err) => next (err))
  .catch((err) => next(err));
})
//updating bands does not make sense for this endpoint
.put((req,res,next) => {
  res.statusCode = 403;
  res.end('Cannot Update Band Info at: /bands' + '\n' + 'Please Update Band Info at Endpoint: /bands/bandId');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('NOT Authorized to Delete Entries at this Endpoint');
});

bandRouter.route('/:bandId')
.get((req,res,next) => {
  Bands.findById(req.params.bandId)
  .then((band) => {
    console.log('Band Created ', band);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(band);
  }, (err) => next (err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
  res.statusCode = 403
  res.end('Cannot create new band: ' + req.params.bandId + ' at endpoint: /bands/bandId' + '\n' + 'Please create new band at: /bands');
})
.put((req,res,next) => {
  Bands.findByIdAndUpdate(req.params.bandId, {
    $set: req.body
  }, {new: true})
  .then((band) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(band);
  }, (err) => next (err))
  .catch((err) => next(err));
})
.delete((req,res,next) => {
  Bands.findOneAndDelete(req.params.bandId)
  .then((response) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Deleted ' + req.params.bandId);
  }, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = bandRouter;
