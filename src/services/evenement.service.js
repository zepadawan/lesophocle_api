import Evenement from '../models/evenement.js';
import config from '../configs/config.js';

// getAll
// *******************
export async function getAll() {
  return await Evenement.findAll();
}

// getByID
// *******************
export async function getById(id) {
  return await getEvenement(id);
}

// create
// *******************
export async function create(req) {
  return Evenement.create(req)
}


// update 
// *******************
export async function update(id, params) {
  return await Evenement.update(params, { where: { id: id } });
}

// delete
// *******************
export async function _delete(id) {
  const evenement = await getEvenement(id);
  await evenement.destroy();
}

// helper functions
async function getEvenement(id) {
  const evenement = await Evenement.findByPk(id);
  if (!evenement) throw 'Evenement not found';
  return evenement;
}

export default {}
