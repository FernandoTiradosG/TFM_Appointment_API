import { Router } from 'express';
import { createController, updateController, deleteController, getUsers, getUserById } from '../controllers/user-controller.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createController);
router.patch('/', updateController);
router.delete('/', deleteController);

export default router;