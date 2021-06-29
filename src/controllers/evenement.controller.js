import { getAll, getById, create, update, _delete } from '../services/evenement.service.js';

export function getAllEvenements(req, res, next) {
  return getAll(req, res)
    .then((evenements) => res.json({
      args: evenements,
      status: 200
    }))
    .catch(next);

}

export function getEvenementById(req, res, next) {
  return getById(req.params.id, res)
    .then((evenement) => res.json({
      args: evenement,
      status: 200
    }))
    .catch(next);
}

export function createEvenement(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      evenement: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateEvenement(req, res, next) {
  return update(req.params.id, req.body)
    .then((evenement) => res.json({
      newEvenement: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteEvenement(req, res, next) {
  return _delete(req.params.id, res)
    .then(evenement => res.json({
      evenement_numero: req.params.id,
      status: 203,
      message: `Evenement is deleted`
    }))
    .catch(next);
}


export default {};