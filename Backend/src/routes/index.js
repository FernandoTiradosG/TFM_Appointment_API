import express from 'express';
import { login } from '../controllers/login-controller.js';
import User from './user-router.js';
import Month from './month-router.js';

const router = express.Router();

router.post('/login', login);

router.use('/user', User);
router.use('/month', Month);

export default router;