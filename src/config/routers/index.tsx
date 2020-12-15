import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from "react-router-dom"
import axios from 'axios';

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
  const query = useQuery()
  const match: any = useRouteMatch('/home/:id');
  
  useEffect(() => {
    handleLogin()
  }, [])

  async function handleLogin() {
    try {
      const jwt: any = (match?.params?.id || '')
      setToken(jwt)
      await axios.get(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${jwt}`).then((response: any) => {
        localStorage.setItem('id', jwt)
        localStorage.setItem('firstName', response.data.firstName);
        localStorage.setItem('lastName', response.data.lastName);
        localStorage.setItem('email', response.data.email)
      }
      )


    } catch (error) {
      console.log(error)
      console.log("alskdalkdajk")
    }
  }


  if (token) {
    return <PrivateRoutes />
  }

  return <SignRoutes />
}

export default Routes
