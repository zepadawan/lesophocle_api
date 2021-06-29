import { getAll, getById, create, update, _delete } from '../services/inscription.service.js';

export function getAllInscriptions(req, res, next) {
  return getAll(req, res)
    .then((inscriptions) => res.json({
      args: inscriptions,
      status: 200
    }))
    .catch(next);

}

export function getInscriptionById(req, res, next) {
  return getById(req.params.id, res)
    .then((inscription) => res.json({
      args: inscription,
      status: 200
    }))
    .catch(next);
}

export function createInscription(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      inscription: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateInscription(req, res, next) {
  return update(req.params.id, req.body)
    .then((inscription) => res.json({
      newInscription: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteInscription(req, res, next) {
  return _delete(req.params.id, res)
    .then(inscription => res.json({
      inscription_numero: req.params.id,
      status: 203,
      message: `Inscription is deleted`
    }))
    .catch(next);
}


export default {};