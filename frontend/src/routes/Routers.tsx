import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Dashboard } from '../pages/Dashboard'
import { Subscribe } from '../pages/Subscribe'
import { Administration } from '../pages/Administration'
import { Login } from '../pages/Login'
import { Forgot } from '../pages/Forgot'
import { Me } from '../pages/Me'
import { Signup } from '../pages/Signup'
import { Profile } from '../pages/Profile'
import { AuthProvider } from '../contexts/AuthContext'
import { System } from '../pages/System'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routers = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/administration"
            element={<PrivateRoute component={Administration} />}
          />

          <Route path="/info" element={<PrivateRoute component={System} />} />

          <Route path="/" element={<Home />} />

          <Route path="/" element={<Home />} />

          <Route path="/subscribe" element={<Subscribe />} />

          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="/account.login"
            element={<PublicRoute component={Login} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />

          <Route path="/me/:id" element={<PrivateRoute component={Me} />} />
          <Route
            path="/profile/:id"
            element={<PrivateRoute component={Profile} />}
          />

          <Route path="/system" element={<PrivateRoute component={System} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default Routers
