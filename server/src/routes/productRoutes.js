import { Router } from 'express'
import {
  create,
  getOne,
  list,
  remove,
  update
} from '../controllers/productController.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = Router()

// Todas las rutas de productos requieren un JWT válido
router.use(authenticateToken)

router.get('/', list)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router
