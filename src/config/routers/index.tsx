import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
  const query = useQuery()


  useEffect(() => {
    if (query.get('id')?.length) {
      const jwt: any = (query.get('id') || '')
      const currentTime = Date.now() / 1000

      if (jwt.length || jwt?.exp < currentTime) {
        setToken(null)
      } else {
        setToken(jwt)
        localStorage.setItem('token', jwt)
      }
    }
  }, [])
  
  if (token && token?.exp) {
    return <PrivateRoutes />
  }
  return <PrivateRoutes />
  // return <SignRoutes />
}

export default Routes
