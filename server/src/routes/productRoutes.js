import { Router } from 'express'
import { create, getOne, list, remove, update } from '../controllers/productController.js'

const router = Router()
router.get('/', list)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.patch('/:id', update)
router.delete('/:id', remove)
export default router
