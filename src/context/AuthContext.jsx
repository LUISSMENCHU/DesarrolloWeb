import { createContext, useContext, useEffect, useReducer } from 'react'

const AuthContext = createContext()

const estadoInicial = {
  usuario: null,
  token: null,
  expirationMessage: '',
  isAuthenticated: false
}

function authReducer(state, action) {

  switch (action.type) {

    case 'LOGIN':
      return {
        usuario: action.payload.usuario,
        token: action.payload.token,
        expirationMessage: '',
        isAuthenticated: true
      }

    case 'LOGOUT':
      return {
        usuario: null,
        token: null,
        expirationMessage: action.payload?.message || '',
        isAuthenticated: false
      }

    case 'ACTUALIZAR_PERFIL':
      return {
        ...state,
        usuario: {
          ...state.usuario,
          ...action.payload
        }
      }

    case 'LIMPIAR_SESION':
      return estadoInicial

    default:
      return state
  }
}

export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(
    authReducer,
    estadoInicial,
    () => {
      try {
        const usuario = JSON.parse(localStorage.getItem('techstore_usuario'))
        const token = localStorage.getItem('techstore_token')
        return usuario && token
          ? { ...estadoInicial, usuario, token, isAuthenticated: true }
          : estadoInicial
      } catch {
        return estadoInicial
      }
    }
  )

  useEffect(() => {
    if (state.usuario && state.token) {
      localStorage.setItem('techstore_usuario', JSON.stringify(state.usuario))
      localStorage.setItem('techstore_token', state.token)
    } else {
      localStorage.removeItem('techstore_usuario')
      localStorage.removeItem('techstore_token')
    }
  }, [state.usuario, state.token])

  useEffect(() => {
    function onTokenExpired(event) {
      dispatch({ type: 'LOGOUT', payload: { message: event.detail?.message } })
    }

    window.addEventListener('techstore:token-expired', onTokenExpired)
    return () => window.removeEventListener('techstore:token-expired', onTokenExpired)
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
