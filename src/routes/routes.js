import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { renameFile, send_file_using_promise } from '../controllers/test.controller.js';
import { getAllTextes, getTexteById, createTexte, updateTexte, deleteTexte } from '../controllers/texte.controller.js';
import { getAllCategories, getCategorieById, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categorie.controller.js';
import { getAllAllergenes, getAllergeneById, createAllergene, updateAllergene, deleteAllergene } from '../controllers/allergene.controller.js';
import { getAllPlats, getPlatById, createPlat, updatePlat, deletePlat, } from '../controllers/plat.controller.js';
import { getAllCartes, getCarteById, createCarte, updateCarte, deleteCarte } from '../controllers/carte.controller.js';

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

// Categories
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategorieById);
router.post('/categories', createCategorie);
router.put('/categories/:id', updateCategorie);
router.delete('/categories/:id', deleteCategorie);

// Allergenes
router.get('/allergenes', getAllAllergenes);
router.get('/allergenes/:id', getAllergeneById);
router.post('/allergenes', createAllergene);
router.put('/allergenes/:id', updateAllergene);
router.delete('/allergenes/:id', deleteAllergene);

// textes
router.get('/textes', getAllTextes);
router.get('/textes/:id', getTexteById);
router.post('/textes', createTexte);
router.put('/textes/:id', updateTexte);
router.delete('/textes/:id', deleteTexte);

// Cartes
router.get('/cartes', getAllCartes);
router.get('/cartes/:id', getCarteById);
router.post('/cartes', createCarte);
router.put('/cartes/:id', updateCarte);
router.delete('/cartes/:id', deleteCarte);

// tests
router.get('/test', renameFile);
router.get('/test2', send_file_using_promise);









export default router;