import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface PropType {
  component: FC
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('GLOBAL_SYS_STOREGE_KEY-1.0.0')

  if (isAuthenticated) return <Component />
  return <Navigate to="/account.login" />
}

export default PrivateRoute
