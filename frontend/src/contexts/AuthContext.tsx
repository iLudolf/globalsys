import { createContext, ReactNode } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { history } from '../services/History'

interface signInCredentials {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextData = {
  signIn({ email, password }: signInCredentials): Promise<void>
  isAuthenticated: boolean
  logout: () => void
}

const STOREGE_KEY = 'GLOBAL_SYS_STOREGE_KEY'
const STOREGE_USER = 'GLOBAL_SYS_STOREGE_USER'
const STOREGE_PROFILE = 'GLOBAL_SYS_STOREGE_PROFILE'
const STOREGE_EMAIL = 'GLOBAL_SYS_STOREGE_EMAIL'
const STOREGE_PROFILE_ID = 'GLOBAL_SYS_STOREGE_PROFILE_ID'
const STOREGE_ISADMIN = 'GLOBAL_SYS_STOREGE_ISADMIN'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = !!localStorage.getItem(STOREGE_KEY)

  const signIn = async ({ email, password }: signInCredentials) => {
    const response = await api.post('authentication/login', {
      email: `${email}`,
      password,
    })

    const {
      token,
      path,
      name,
      user_id: userId,
      isAdmin,
    } = await response.data.message
    const { error, message } = response.data

    if (!error) {
      history.push('/dashboard')
      localStorage.setItem(STOREGE_ISADMIN, isAdmin)
      localStorage.setItem(STOREGE_PROFILE_ID, userId)
      localStorage.setItem(STOREGE_KEY, token)
      localStorage.setItem(STOREGE_USER, name)
      localStorage.setItem(STOREGE_EMAIL, `${email}`)
      localStorage.setItem(
        STOREGE_PROFILE,
        `${process.env.REACT_APP_LINK_API}/storage/${path}`,
      )
      window.location.reload()
    } else {
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const logout = () => {
    history.push('/account.login')
    localStorage.removeItem(STOREGE_KEY)
    localStorage.removeItem(STOREGE_USER)
    localStorage.removeItem(STOREGE_PROFILE_ID)
    localStorage.removeItem(STOREGE_PROFILE)
    localStorage.removeItem(STOREGE_EMAIL)
    localStorage.removeItem(STOREGE_ISADMIN)
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
