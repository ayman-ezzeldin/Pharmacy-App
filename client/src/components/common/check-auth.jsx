import { Navigate, uselocation } from 'react-router-dom'

const CheckAuth = ({isAuthenticated, user, children}) => {

  const location = uselocation()

  if (!isAuthenticated && !(location.pathname.includes('login') || location.pathname.includes('register') ) ) {
    return <Navigate to="/auth/login" />
  }

  if (isAuthenticated && (location.pathname.includes('login') || location.pathname.includes('register') ) ) {
    if(user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />
    } else {
      return <Navigate to="/shop/home" />
    }
  }

  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    // return <Navigate to="/unauth-page" />
    return <Navigate to="/shop/home" />
  }

  if (isAuthenticated && user?.role === 'admin' && !location.pathname.includes('shop')) {
    return <Navigate to="/admin/dashboard" />
  }

  return (
    <>{children}</>
  )
}

export default CheckAuth