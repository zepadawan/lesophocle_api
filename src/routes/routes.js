import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { renameFile, send_file_using_promise } from '../controllers/test.controller.js';
import { getAllTextes, getTexteById, createTexte, updateTexte, deleteTexte } from '../controllers/texte.controller.js';
import { getAllCategories, getCategorieById, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categorie.controller.js';
import { getAllPlats, getPlatById, createPlat, updatePlat, deletePlat, } from '../controllers/plat.controller.js';

// Users
router.get('/users', getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);

// Plats
router.get('/plats', getAllPlats);
router.get('/plats/:id', getPlatById);
router.post('/plats', createPlat);
router.put('/plats/:id', updatePlat);
router.delete('/plats/:id', deletePlat);

// images
// router.post('/upload/:id', uploadImage);


// Categories
router.get('/categories', getAllCategories);
router.get('/plats/:id', getCategorieById);
router.post('/plats', createCategorie);
router.put('/plats/:id', updateCategorie);
router.delete('/plats/:id', deleteCategorie);

// textes
router.get('/textes', getAllTextes);
router.get('/textes/:id', getTexteById);
router.post('/textes', createTexte);
router.put('/textes/:id', updateTexte);
router.delete('/textes/:id', deleteTexte);

// tests
router.get('/test', renameFile);
router.get('/test2', send_file_using_promise);









export default router;