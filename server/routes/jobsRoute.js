import Router from 'express';
import jobsController from '../controllers/JobsController';

const router = Router();

router.get('/', jobsController.findAll);
router.get(`/:id`, jobsController.findOne);
router.post(`/`, jobsController.created);
router.put(`/:id`, jobsController.updated);
router.delete(`/:id`, jobsController.deleted);

export default router;
