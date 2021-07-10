import { getAll, getById, create, update, _delete } from '../services/boisson.service.js';

export function getAllBoissons(req, res, next) {
  return getAll(req, res)
    .then((boisson) => res.json({
      args: boisson,
      status: 200
    }))
    .catch(next);

}

export function getBoissonById(req, res, next) {
  return getById(req.params.id, res)
    .then((boisson) => res.json({
      args: boisson,
      status: 200
    }))
    .catch(next);
}

export function createBoisson(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      boisson: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateBoisson(req, res, next) {
  return update(req.params.id, req.body)
    .then((boisson) => res.json({
      newboisson: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteBoisson(req, res, next) {
  return _delete(req.params.id, res)
    .then(boisson => res.json({
      boisson_numero: req.params.id,
      status: 203,
      message: `Boisson is deleted`
    }))
    .catch(next);
}



export default {};