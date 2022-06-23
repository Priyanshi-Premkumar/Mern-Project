import express from 'express';
import { getPoem,createPoem ,updatePoem, deletePoem, likePoem } from '../controllers/poem.js';
const router = express.Router();
router.get('/',getPoem);
router.post('/',createPoem);
router.patch('/:id',updatePoem)
router.delete('/:id',deletePoem)
router.patch('/:id/likePoem',likePoem)
export default router; 