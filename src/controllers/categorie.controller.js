import { getAll, getById, create, update, _delete } from '../services/categorie.service.js';

export function getAllCategories(req, res, next) {
  return getAll(req, res)
    .then((categories) => res.json({
      args: categories,
      status: 200
    }))
    .catch(next);

}

export function getCategorieById(req, res, next) {
  return getById(req.params.id, res)
    .then((categorie) => res.json({
      args: categorie,
      status: 200
    }))
    .catch(next);
}

export function createCategorie(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      categorie: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateCategorie(req, res, next) {
  return update(req.params.id, req.body)
    .then((categorie) => res.json({
      newCategorie: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteCategorie(req, res, next) {
  return _delete(req.params.id, res)
    .then(categorie => res.json({
      categorie_numero: req.params.id,
      status: 203,
      message: `Categorie is deleted`
    }))
    .catch(next);
}



export default {};