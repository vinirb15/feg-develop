import React, { useEffect, useState } from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom"
import jwt_decode from "jwt-decode"

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
  let query = useQuery()

  useEffect(() => { 
    if (query.get('access')?.length) {
      const jwt: any = jwt_decode(query.get('access') || '')
      const currentTime = Date.now() / 1000

      if (jwt.length || jwt?.exp < currentTime) {
        setToken(null)
        window.location.href = 'https://account.systemfeg.com/login'
      } else {
        setToken(jwt)
      }
    }
  }, [])
  console.log('TEETETETETETS', token)
  if (token && token?.exp ) {
    return <PrivateRoutes />
  }

  return <SignRoutes />
}

export default Routes
