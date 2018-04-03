const express = require('express');
const router = express.Router();
const { User } = require('../db');
const { hash } = require('../middleware/middleware');

function create(req, res, next) {
   return User.create(req.body)
    .then(user => res.send(user))
    .catch(err => next(err));
  }

function list(req, res, next) {
  return User.find()
    .then(users => res.send(users))
    .catch(err => next(err));
};

function find(req, res, next) {
  const id = req.params.id;

  return User.findById(id)
    .then(user => res.send(user))
    .catch(err => next(err));
};

function update(req, res, next) {
  return User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.send(user))
    .catch(err => next(err));
};

function remove(req, res, next) {
  return User.findByIdAndRemove(req.params.id)
    .then(user => res.send(user))
    .catch(err => next(err));
};

router.get('/user', list);
router.post('/user', create);
router.get('/user/:id', find);
router.delete('/user/:id', remove);
router.put('/user/:id', update);

module.exports = router;
