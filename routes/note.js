const express = require('express');
const router = express.Router();
const { Note } = require('../db');

function create(req, res, next) {
   return Note.create(req.body)
    .then(note => res.send(note))
    .catch(err => next(err));
  }

function list(req, res, next) {
  return Note.find()
    .then(notes => res.send(notes))
    .catch(err => next(err));
};

function find(req, res, next) {
  const id = req.params.id;

  return Note.findById(id)
    .then(note => res.send(note))
    .catch(err => next(err));
};

function update(req, res, next) {
  return Note.findByIdAndUpdate(req.params.id, req.body)
    .then(note => res.send(note))
    .catch(err => next(err));
};

function remove(req, res, next) {
  return Note.findByIdAndRemove(req.params.id)
    .then(res.send('Note deleted!'))
    .catch(err => next(err));
};

router.get('/note', list);
router.post('/note', create);
router.get('/note/:id', find);
router.delete('/note/:id', remove);
router.put('/booking/:id', update);

module.exports = router;
