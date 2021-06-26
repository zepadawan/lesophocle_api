import { getAll, getById, create, update, _delete } from '../services/client.service.js';

export function getAllClients(req, res, next) {
  return getAll(req, res)
    .then((clients) => res.json({
      args: clients,
      status: 200
    }))
    .catch(next);

}

export function getClientById(req, res, next) {
  return getById(req.params.id, res)
    .then((client) => res.json({
      args: client,
      status: 200
    }))
    .catch(next);
}

export function createClient(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      client: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateClient(req, res, next) {
  return update(req.params.id, req.body)
    .then((client) => res.json({
      newClient: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteClient(req, res, next) {
  return _delete(req.params.id, res)
    .then(client => res.json({
      client_numero: req.params.id,
      status: 203,
      message: `Client is deleted`
    }))
    .catch(next);
}


export default {};