import { getAll } from '../services/carte.service.js';

export function getAllCartes(req, res, next) {
  return getAll(req, res)
    .then((cartes) => res.json({
      args: cartes,
      status: 200
    }))
    .catch(next);

}

export function getCarteById(req, res, next) {
  return getById(req.params.id, res)
    .then((carte) => res.json({
      args: carte,
      status: 200
    }))
    .catch(next);
}

export function createCarte(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      carte: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateCarte(req, res, next) {
  return update(req.params.id, req.body)
    .then((carte) => res.json({
      newCarte: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteCarte(req, res, next) {
  return _delete(req.params.id, res)
    .then(carte => res.json({
      carte_numero: req.params.id,
      status: 203,
      message: `Carte is deleted`
    }))
    .catch(next);
}



export default {};