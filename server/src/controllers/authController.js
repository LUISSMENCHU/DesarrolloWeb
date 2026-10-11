import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const publicUser = (user) => ({ id: user._id, nombre: user.nombre, email: user.email, rol: user.rol, createdAt: user.createdAt })

export async function register(req, res, next) {
  try {
    const { nombre, email, password } = req.body
    if (!nombre || !email || !password) return res.status(400).json({ message: 'Nombre, correo y contraseña son obligatorios.' })
    if (password.length < 8) return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres.' })
    const normalizedEmail = email.toLowerCase().trim()
    if (await User.exists({ email: normalizedEmail })) return res.status(409).json({ message: 'Ya existe una cuenta con ese correo.' })
    const user = await User.create({ nombre, email: normalizedEmail, password: await bcrypt.hash(password, 12) })
    res.status(201).json({ usuario: publicUser(user) })
  } catch (error) { next(error) }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' })
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password')
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Correo o contraseña incorrectos.' })
    res.json({ usuario: publicUser(user) })
  } catch (error) { next(error) }
}
