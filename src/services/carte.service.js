import Carte from '../models/carte.model.js';

export async function getAll() {
  return await Carte.findAll();
}

export function getById(id) {
  return getCarte(id);
}

export function create(req) {
  return Carte.create(req);
}

export async function update(id, params) {
  return await Carte.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const carte = await getCarte(id);
  await carte.destroy();
}

// helper functions
async function getCarte(id) {
  const carte = await Carte.findByPk(id);
  if (!carte) throw 'Carte not found';
  return carte;
}

export default {}


