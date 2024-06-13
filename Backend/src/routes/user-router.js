import { Router } from 'express';
import { createController, updateController, deleteController, getAllUsers, getUserById } from '../controllers/user-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';
import { authorizeUser } from '../middlewares/rol-middleware.js';

const router = Router();

router.get('/', checkToken, authorizeUser(['admin']), getAllUsers);
router.get('/:id', checkToken, authorizeUser(['admin']), getUserById);
router.post('/', createController);
router.patch('/:id', checkToken, updateController);
router.delete('/:id', checkToken, deleteController);

export default router;