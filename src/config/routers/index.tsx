import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom"
import axios from '../../services/axios';

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
  const match: any = useRouteMatch('/home/:id');

  useEffect(() => {
    handleLogin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  async function handleLogin() {
    try {
      const jwt: any = (match?.params?.id || '')
      setToken(jwt)
      await axios.get(`/api/v1/accounts/${jwt}`).then((response: any) => {
        localStorage.setItem('id', jwt)
        localStorage.setItem('firstName', response.data.results.firstName)
        localStorage.setItem('lastName', response.data.results.lastName)
        localStorage.setItem('email', response.data.results.email)
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
