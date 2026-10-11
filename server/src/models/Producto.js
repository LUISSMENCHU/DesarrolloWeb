import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, default: '' },
  categoria: { type: String, required: true, trim: true },
  precio: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
}, { timestamps: true })

export default mongoose.model('Producto', productoSchema)
