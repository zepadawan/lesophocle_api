import Allergene from '../models/allergenes.model.js';

export async function getAll() {
  return await Allergene.findAll();
}

export function getById(id) {
  return getAllergene(id);
}

export function create(req) {
  return Allergene.create(req);
}

export async function update(id, params) {
  return await Allergene.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const allergene = await getAllergene(id);
  await allergene.destroy();
}

// helper functions
async function getAllergene(id) {
  const allergene = await Allergene.findByPk(id);
  if (!allergene) throw 'Categorie not found';
  return allergene;
}

export default {}


