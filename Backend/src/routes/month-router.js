import { Router } from 'express';
import { getMonths, getDay, createMonthController, updateDayController, deleteMonthController } from '../controllers/month-controller.js';

const router = Router();

router.get('/days', getMonths);
router.get('/days/:dayId', getDay)
router.post('/', createMonthController);
router.patch('/days/:dayID/reserva', updateDayController);
router.delete('/', deleteMonthController);

export default router;