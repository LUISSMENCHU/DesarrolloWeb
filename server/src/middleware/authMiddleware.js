
import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next) {
  const authorization = req.headers.authorization

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'token_missing',
      message: 'Se requiere un token de autenticación.'
    })
  }

  const token = authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: 'token_missing',
      message: 'Se requiere un token de autenticación.'
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    }

    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'token_expired',
        message: 'La sesión ha expirado o ya no es válida. Por favor, inicie sesión nuevamente.'
      })
    }

    return res.status(401).json({
      error: 'token_invalid',
      message: 'El token no es válido. Inicie sesión nuevamente.'
    })
  }
}
