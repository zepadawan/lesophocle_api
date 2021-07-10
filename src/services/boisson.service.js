import Boisson from '../models/boisson.model.js';

export async function getAll() {
  return await Boisson.findAll();
}

export function getById(id) {
  return getBoisson(id);
}

export function create(req) {
  return Boisson.create(req);
}

export async function update(id, params) {
  return await Boisson.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const boisson = await getBoisson(id);
  await boisson.destroy();
}

// helper functions
async function getBoisson(id) {
  const boisson = await Boisson.findByPk(id);
  if (!boisson) throw 'Boisson not found';
  return boisson;
}

export default {}


