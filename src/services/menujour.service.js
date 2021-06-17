import MenuJour from '../models/menujour.model.js';

export async function getAll() {
  return await MenuJour.findAll();
}

export function getById(id) {
  return getMenuJour(id);
}

export function create(req) {
  return MenuJour.create(req);
}

export async function update(id, params) {
  return await MenuJour.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const menuJour = await getMenuJour(id);
  await menuJour.destroy();
}

// helper functions
async function getMenuJour(id) {
  const menuJour = await MenuJour.findByPk(id);
  if (!menuJour) throw 'MenuJour not found';
  return menuJour;
}

export default {}


