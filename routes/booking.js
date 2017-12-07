const express = require('express');
const router = express.Router();
const { Booking } = require('../db');

function create(req, res, next) {
   return Booking.create(req.body)
    .then(booking => res.send(booking))
    .catch(err => next(err));
  }

function list(req, res, next) {
  return Booking.find()
    .then(bookings => res.send(bookings))
    .catch(err => next(err));
};

function find(req, res, next) {
  const id = req.params.id;

  return Booking.findById(id)
    .then(booking => res.send(booking))
    .catch(err => next(err));
};

function update(req, res, next) {
  return Booking.findByIdAndUpdate(req.params.id, req.body)
    .then(booking => res.send(booking))
    .catch(err => next(err));
};

function remove(req, res, next) {
  return Booking.findByIdAndRemove(req.params.id)
    .then(booking => res.send(booking))
    .catch(err => next(err));
};

router.get('/booking', list);
router.post('/bookig', create);
router.get('/booking/:id', find);
router.delete('/booking/:id', remove);
router.put('/booking/:id', update);

module.exports = router;
