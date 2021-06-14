import { getAll, getById, create, update, _delete } from '../services/allergene.service.js';

export function getAllAllergenes(req, res, next) {
  return getAll(req, res)
    .then((allergenes) => res.json({
      args: allergenes,
      status: 200
    }))
    .catch(next);

}

export function getAllergeneById(req, res, next) {
  return getById(req.params.id, res)
    .then((allergene) => res.json({
      args: allergene,
      status: 200
    }))
    .catch(next);
}

export function createAllergene(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      allergene: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateAllergene(req, res, next) {
  return update(req.params.id, req.body)
    .then((allergene) => res.json({
      newAllergene: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteAllergene(req, res, next) {
  return _delete(req.params.id, res)
    .then(allergene => res.json({
      allergene_numero: req.params.id,
      status: 203,
      message: `Allergene is deleted`
    }))
    .catch(next);
}



export default {};