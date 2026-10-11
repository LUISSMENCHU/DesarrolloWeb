import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175'
  ]
}))
app.use(express.json())
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/auth', authRoutes)
app.use('/api/recursos', productRoutes)
app.use((req, res) => res.status(404).json({ message: `Ruta no encontrada: ${req.method} ${req.path}` }))
app.use((error, _req, res, _next) => {
  if (error.code === 11000) return res.status(409).json({ message: 'Ese registro ya existe.' })
  if (error.name === 'ValidationError') return res.status(400).json({ message: error.message })
  console.error(error)
  res.status(500).json({ message: 'Error interno del servidor.' })
})

const port = process.env.PORT || 3000
try {
  await connectDB()
  app.listen(port, () => console.log(`API disponible en http://localhost:${port}`))
} catch (error) {
  console.error(`No se pudo iniciar la API: ${error.message}`)
  process.exit(1)
}
