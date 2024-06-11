import { Router } from 'express';
import { getDayController, createReservationController, updateReservationController, deleteReservationController, checkReservationsController } from '../controllers/month-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';
import { authorizeUser } from '../middlewares/rol-middleware.js';

const router = Router();

//router.get('/calendar', checkToken, authorizeUser(['admin']), getMonthsController);
router.get('/days', checkToken, checkReservationsController);
router.get('/days/:dayId', checkToken, getDayController);
router.post('/', checkToken, createReservationController);
router.patch('/days/:dayID', checkToken, authorizeUser(['admin']), updateReservationController);
router.delete('/days/:dayID', checkToken, authorizeUser(['admin']), deleteReservationController);

export default router;
