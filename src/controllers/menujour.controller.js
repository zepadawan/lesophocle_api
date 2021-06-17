import { getAll, getById, create, update, _delete } from '../services/menujour.service.js';

export function getAllMenuJour(req, res, next) {
  return getAll(req, res)
    .then((menujour) => res.json({
      args: menujour,
      status: 200
    }))
    .catch(next);

}

export function getMenuJourById(req, res, next) {
  return getById(req.params.id, res)
    .then((menujour) => res.json({
      args: menujour,
      status: 200
    }))
    .catch(next);
}

export function createMenuJour(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      menujour: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateMenuJour(req, res, next) {
  return update(req.params.id, req.body)
    .then((categorie) => res.json({
      newmenujour: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteMenuJour(req, res, next) {
  return _delete(req.params.id, res)
    .then(menujour => res.json({
      menujour_numero: req.params.id,
      status: 203,
      message: `Menujour is deleted`
    }))
    .catch(next);
}

export default {};