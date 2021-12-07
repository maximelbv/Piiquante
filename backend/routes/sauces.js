import express from 'express';
const router = express.Router();
import * as saucesControllers from '../controllers/sauces.js';

router.get('/', saucesControllers.getAllSauces);

router.get('/:id', saucesControllers.getSauce);

router.post('/', saucesControllers.postSauce);

router.put('/:id', saucesControllers.modifySauce);

router.delete('/:id', saucesControllers.deleteSauce);

// router.post('/:id/like',saucesControllers.likeSauce);

// module.exports = router;

export default router;