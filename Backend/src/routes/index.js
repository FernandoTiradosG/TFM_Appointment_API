import express from 'express';
import cors from 'cors';
import { login } from '../controllers/login-controller.js';
import User from './user-router.js';
import Month from './month-router.js';

const router = express.Router(); 

router.post('/login', login);

router.use('/user', User);
router.use('/date', Month);

export default router;