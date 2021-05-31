import Plat from '../models/plat.model.js';

// getAll
// *******************
export async function getAll() {

  return await Plat.findAll();
}

export function getById(id) {
  return getPlat(id);
}

export function create(req) {
  return Plat.create(req);
}

export async function update(id, params) {
  return await Plat.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const plat = await getPlat(id);
  await plat.destroy();

}

// helper functions
async function getPlat(id) {
  const plat = await Plat.findByPk(id);
  if (!plat) throw 'Plat not found';
  return plat;
}

export default {}


