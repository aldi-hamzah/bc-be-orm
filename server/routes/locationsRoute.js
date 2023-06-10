import Router from 'express';
import locationsController from '../controllers/LocationsController';

const router = Router();

router.get('/', locationsController.findAll);
router.get(`/:id`, locationsController.findOne);
router.post(`/`, locationsController.created);
router.put(`/:id`, locationsController.updated);
router.delete(`/:id`, locationsController.deleted);

export default router;
