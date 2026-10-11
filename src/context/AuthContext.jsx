import { createContext, useContext, useEffect, useReducer } from 'react'

const AuthContext = createContext()

const estadoInicial = {
  usuario: null,
  isAuthenticated: false
}

function authReducer(state, action) {

  switch (action.type) {

    case 'LOGIN':
      return {
        usuario: action.payload,
        isAuthenticated: true
      }

    case 'LOGOUT':
      return {
        usuario: null,
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
        return usuario ? { usuario, isAuthenticated: true } : estadoInicial
      } catch {
        return estadoInicial
      }
    }
  )

  useEffect(() => {
    if (state.usuario) localStorage.setItem('techstore_usuario', JSON.stringify(state.usuario))
    else localStorage.removeItem('techstore_usuario')
  }, [state.usuario])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
