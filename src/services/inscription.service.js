import Inscription from '../models/inscription.js';
import config from '../configs/config.js';

// getAll
// *******************
export async function getAll() {
  return await Inscription.findAll();
}

// getByID
// *******************
export async function getById(id) {
  return await getInscription(id);
}

// create
// *******************
export async function create(req) {
  return Inscription.create(req)
}


// update 
// *******************
export async function update(id, params) {
  return await Inscription.update(params, { where: { id: id } });
}

// delete
// *******************
export async function _delete(id) {
  const inscription = await getInscription(id);
  await inscription.destroy();
}

// helper functions
async function getInscription(id) {
  const inscription = await Inscription.findByPk(id);
  if (!inscription) throw 'Inscription not found';
  return inscription;
}

export default {}
