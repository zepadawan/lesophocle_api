import Categorie from '../models/categorie.model.js';

export async function getAll() {
  return await Categorie.findAll();
}

export function getById(id) {
  return getCategorie(id);
}

export function create(req) {
  return Categorie.create(req);
}

export async function update(id, params) {
  return await Categorie.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const categorie = await getCategorie(id);
  await categorie.destroy();
}

// helper functions
async function getCategorie(id) {
  const categorie = await Categorie.findByPk(id);
  if (!categorie) throw 'Categorie not found';
  return categorie;
}

export default {}


