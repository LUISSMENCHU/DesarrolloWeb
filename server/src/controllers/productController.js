import mongoose from 'mongoose'
import Producto from '../models/Producto.js'

export async function list(req, res, next) {
  try {
    const filter = {}
    if (req.query.categoria) filter.categoria = new RegExp(`^${req.query.categoria}$`, 'i')
    if (req.query.q) filter.nombre = { $regex: req.query.q, $options: 'i' }
    res.json({ productos: await Producto.find(filter).sort({ createdAt: -1 }) })
  } catch (error) { next(error) }
}
export async function getOne(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'ID inválido.' })
    const producto = await Producto.findById(req.params.id)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado.' })
    res.json({ producto })
  } catch (error) { next(error) }
}
export async function create(req, res, next) {
  try { res.status(201).json({ producto: await Producto.create(req.body) }) } catch (error) { next(error) }
}
export async function update(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'ID inválido.' })
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado.' })
    res.json({ producto })
  } catch (error) { next(error) }
}
export async function remove(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'ID inválido.' })
    const producto = await Producto.findByIdAndDelete(req.params.id)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado.' })
    res.json({ message: 'Producto eliminado.' })
  } catch (error) { next(error) }
}
