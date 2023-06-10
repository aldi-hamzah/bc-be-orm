import { Router } from 'express';
import countriesController from '../controllers/CountriesController';

const router = Router();

router.get(`/`, countriesController.findAll);
router.get(`/:id`, countriesController.findOne);
router.post(`/`, countriesController.created);
router.put(`/:id`, countriesController.updated);
router.delete(`/:id`, countriesController.deleted);

export default router;
