import CategorieBoisson from '../models/categorie_boisson.model.js';

export async function getAll() {
  return await CategorieBoisson.findAll();
}

export function getById(id) {
  return getCategorieBoisson(id);
}

export function create(req) {
  return CategorieBoisson.create(req);
}

export async function update(id, params) {
  return await CategorieBoisson.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const categorieBoisson = await getCategorieBoisson(id);
  await categorieBoisson.destroy();
}

// helper functions
async function getCategorieBoisson(id) {
  const categorieBoisson = await CategorieBoisson.findByPk(id);
  if (!categorieBoisson) throw 'CategorieBoisson not found';
  return categorieBoisson;
}

export default {}


