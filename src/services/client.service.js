import Client from '../models/client.model.js';
import config from '../configs/config.js';

// getAll
// *******************
export async function getAll() {
  return await Client.findAll();
}

// getByID
// *******************
export async function getById(id) {
  return await getClient(id);
}

// create
// *******************
export async function create(req) {
  return Client.create(req)
}


// update 
// *******************
export async function update(id, params) {
  return await Client.update(params, { where: { id: id } });
}

// delete
// *******************
export async function _delete(id) {
  const client = await getClient(id);
  await client.destroy();
}

// helper functions
async function getClient(id) {
  const client = await Client.findByPk(id);
  if (!client) throw 'Client not found';
  return client;
}

// function omitHash(user) {
//   console.log('omitHash ' + user);
//   const { userWithoutHash } = user;

//   return userWithoutHash;
// }

export default {}