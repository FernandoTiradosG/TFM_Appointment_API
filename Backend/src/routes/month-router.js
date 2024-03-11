import { Router } from 'express';
import { getMonthsController, getDayController, createReservationController, updateReservationController, deleteReservationController, checkReservationsController } from '../controllers/month-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';
import { authorizeUser } from '../middlewares/rol-middleware.js';

const router = Router();

router.get('/calendar', checkToken, authorizeUser(['admin']), getMonthsController);
router.get('/days', checkToken, authorizeUser(['admin']), checkReservationsController);
router.get('/days/:dayId', checkToken, authorizeUser(['admin']), getDayController)
router.post('/',checkToken, createReservationController);
router.patch('/days/:dayID', checkToken, updateReservationController);
router.delete('/days/:dayID', checkToken, deleteReservationController);

export default router;