import 'dotenv/config'
import mongoose from 'mongoose'
import Producto from './models/Producto.js'

const productosIniciales = [
  {
    nombre: 'Dell Inspiron',
    descripcion: 'Laptop para trabajo y estudio con procesador Intel Core i5, 8 GB de RAM y SSD de 512 GB.',
    categoria: 'Laptops',
    precio: 5500,
    stock: 8,
  },
  {
    nombre: 'HP Pavilion',
    descripcion: 'Laptop con procesador Intel Core i5, 8 GB de RAM y SSD de 512 GB.',
    categoria: 'Laptops',
    precio: 5800,
    stock: 6,
  },
  {
    nombre: 'Samsung Galaxy A56',
    descripcion: 'Smartphone para comunicacion, entretenimiento y uso diario, con pantalla AMOLED y amplio almacenamiento.',
    categoria: 'Celulares',
    precio: 3200,
    stock: 10,
  },
  {
    nombre: 'Mouse Logitech M90',
    descripcion: 'Mouse optico para uso diario.',
    categoria: 'Accesorios',
    precio: 90,
    stock: 20,
  },
  {
    nombre: 'Teclado Mecanico',
    descripcion: 'Teclado mecanico para trabajo y entretenimiento.',
    categoria: 'Accesorios',
    precio: 350,
    stock: 12,
  },
]

try {
  if (!process.env.MONGODB_URI) throw new Error('Falta configurar MONGODB_URI en server/.env')

  await mongoose.connect(process.env.MONGODB_URI)
  const resultados = await Promise.all(productosIniciales.map((producto) =>
    Producto.updateOne(
      { nombre: producto.nombre },
      { $setOnInsert: producto },
      { upsert: true },
    ),
  ))
  const agregados = resultados.filter((resultado) => resultado.upsertedCount).length
  console.log(`Carga inicial finalizada. Productos agregados: ${agregados}; ya existentes: ${productosIniciales.length - agregados}.`)
} catch (error) {
  console.error(`No se pudieron cargar los productos: ${error.message}`)
  process.exitCode = 1
} finally {
  await mongoose.disconnect()
}
