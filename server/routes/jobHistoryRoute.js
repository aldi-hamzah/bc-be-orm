import Router from 'express';
import jobHistoryController from '../controllers/JobHistoryController';

const router = Router();

router.get('/', jobHistoryController.findAll);
router.get(`/:id`, jobHistoryController.findOne);
router.post(`/`, jobHistoryController.created);
router.put(`/:id`, jobHistoryController.updated);
router.delete(`/:id`, jobHistoryController.deleted);

export default router;
