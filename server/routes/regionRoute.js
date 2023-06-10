import { Router } from 'express';
import regionController from '../controllers/RegionsController';

const router = Router();

router.get(`/`, regionController.findAll);
router.get(`/:id`, regionController.findOne);
router.post(`/`, regionController.created);
router.put(`/:id`, regionController.updated);
router.delete(`/id`, regionController.deleted);

export default router;
