import Router from 'express';
import employeesController from '../controllers/EmployeesController';

const router = Router();

router.get(`/`, employeesController.findAll);
router.get(`/:id`, employeesController.findOne);
router.post(`/`, employeesController.created);
router.put(`/:id`, employeesController.updated);
router.delete(`/:id`, employeesController.deleted);

export default router;
