import { getAll, getById, create, update, _delete } from '../services/plat.service.js';

export function getAllPlats(req, res, next) {
  return getAll(req, res)
    .then((plats) => res.json({
      args: plats,
      status: 200
    }))
    .catch(next);

}

export function getPlatById(req, res, next) {
  return getById(req.params.id, res)
    .then((plat) => res.json({
      args: plat,
      status: 200
    }))
    .catch(next);
}

export function createPlat(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      plat: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updatePlat(req, res, next) {
  return update(req.params.id, req.body)
    .then((plat) => res.json({
      newPlat: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deletePlat(req, res, next) {
  return _delete(req.params.id, res)
    .then(texpplatlatte => res.json({
      plat_numero: req.params.id,
      status: 203,
      message: `Plat is deleted`
    }))
    .catch(next);
}


export default {};
