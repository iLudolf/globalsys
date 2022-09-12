import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface PropType {
  component: FC
}

const PublicRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('GLOBAL_SYS_STOREGE_KEY-1.0.0')

  if (isAuthenticated) return <Navigate to="/dashboard" />
  return <Component />
}

export default PublicRoute
