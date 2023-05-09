import { Router } from 'express';
import { get } from '../controllers/userController';

const router = Router();

router.get('/', get);

export default router;
