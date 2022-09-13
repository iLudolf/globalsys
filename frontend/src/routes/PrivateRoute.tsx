import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface PropType {
  component: FC
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('GLOBAL_SYS_STOREGE_KEY')

  if (isAuthenticated) return <Component />
  return <Navigate to="/account.login" />
}

export default PrivateRoute
