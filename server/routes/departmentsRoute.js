import Router from 'express';
import departmentsController from '../controllers/DepartmentsController';

const router = Router();

router.get('/', departmentsController.findAll);
router.get(`/:id`, departmentsController.findOne);
router.post(`/`, departmentsController.created);
router.put(`/:id`, departmentsController.updated);
router.delete(`/:id`, departmentsController.deleted);

export default router;
