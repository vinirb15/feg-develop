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
  const match: any = useRouteMatch('/:id');

  useEffect(() => {
    handleLogin()
  }, [])

  async function handleLogin() {
    try {
      const jwt: any = (match?.params?.id || '')
      console.log('teste', match?.params?.id)
      setToken(jwt)
      await axios.get(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${jwt}`).then((response: any) => {
        localStorage.setItem('id', jwt)
        console.log(response.data);
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


  console.log(token, '')
  if (token) {
    return <PrivateRoutes />
  }

  return <PrivateRoutes />
}

export default Routes
