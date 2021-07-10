import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { getAllClients, getClientById, createClient, updateClient, deleteClient } from '../controllers/client.controller.js';
import { renameFile, send_file_using_promise } from '../controllers/test.controller.js';
import { getAllTextes, getTexteById, createTexte, updateTexte, deleteTexte } from '../controllers/texte.controller.js';
import { getAllCategories, getCategorieById, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categorie.controller.js';

import { getAllBoissons, getBoissonById, createBoisson, updateBoisson, deleteBoisson, } from '../controllers/boisson.controller.js';
import { getAllCategoriesBoisson, getCategorieBoissonById, createCategorieBoisson, updateCategorieBoisson, deleteCategorieBoisson } from '../controllers/categorie_boisson.controller.js';

import { getAllAllergenes, getAllergeneById, createAllergene, updateAllergene, deleteAllergene } from '../controllers/allergene.controller.js';
import { getAllPlats, getPlatById, createPlat, updatePlat, deletePlat, } from '../controllers/plat.controller.js';
import { getAllCartes, getCarteById, createCarte, updateCarte, deleteCarte } from '../controllers/carte.controller.js';
import { getAllMenuJour, getMenuJourById, createMenuJour, updateMenuJour, deleteMenuJour } from '../controllers/menujour.controller.js';

import { getAllEvenements, getEvenementById, createEvenement, updateEvenement, deleteEvenement } from '../controllers/evenement.controller.js';
import { getAllInscriptions, getInscriptionById, createInscription, updateInscription, deleteInscription } from '../controllers/inscription.controller.js';


// Users
router.get('/users', getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);

// Clients
router.get('/clients', getAllClients);
router.get('/clients/:id', getClientById);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

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

// Boissons
router.get('/boissons', getAllBoissons);
router.get('/boissons/:id', getBoissonById);
router.post('/boissons', createBoisson);
router.put('/boissons/:id', updateBoisson);
router.delete('/boissons/:id', deleteBoisson);

// Categories de Boissons
router.get('/categoriesboisson', getAllCategoriesBoisson);
router.get('/categoriesboisson/:id', getCategorieBoissonById);
router.post('/categoriesboisson', createCategorieBoisson);
router.put('/categoriesboisson/:id', updateCategorieBoisson);
router.delete('/categoriesboisson/:id', deleteCategorieBoisson);


// MenuJour
router.get('/menujour', getAllMenuJour);
router.get('/menujour/:id', getMenuJourById);
router.post('/menujour', createMenuJour);
router.put('/menujour/:id', updateMenuJour);
router.delete('/menujour/:id', deleteMenuJour);

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

// Evenements
router.get('/evenements', getAllEvenements);
router.get('/evenements/:id', getEvenementById);
router.post('/evenements', createEvenement);
router.put('/evenements/:id', updateEvenement);
router.delete('/evenements/:id', deleteEvenement);

// Inscriptions
router.get('/inscriptions', getAllInscriptions);
router.get('/inscriptions/:id', getInscriptionById);
router.post('/inscriptions', createInscription);
router.put('/inscriptions/:id', updateInscription);
router.delete('/inscriptions/:id', deleteInscription);

// tests
router.get('/test', renameFile);
router.get('/test2', send_file_using_promise);









export default router;