import { getAll, getById, create, update, _delete } from '../services/categorie_boisson.service.js';

export function getAllCategoriesBoisson(req, res, next) {
  return getAll(req, res)
    .then((categoriesboisson) => res.json({
      args: categoriesboisson,
      status: 200
    }))
    .catch(next);

}

export function getCategorieBoissonById(req, res, next) {
  return getById(req.params.id, res)
    .then((categorieboisson) => res.json({
      args: categorieboisson,
      status: 200
    }))
    .catch(next);
}

export function createCategorieBoisson(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      categorieboisson: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateCategorieBoisson(req, res, next) {
  return update(req.params.id, req.body)
    .then((categorieboisson) => res.json({
      newCategorieboisson: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteCategorieBoisson(req, res, next) {
  return _delete(req.params.id, res)
    .then(categorieboisson => res.json({
      categorieboisson_numero: req.params.id,
      status: 203,
      message: `Categorie de Boisson is deleted`
    }))
    .catch(next);
}



export default {};