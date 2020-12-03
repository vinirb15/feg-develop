import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import axios from 'axios';

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
  const query = useQuery()


  useEffect(() => {
    handleLogin()
  }, [])

  async function handleLogin() {
    try {
      const jwt: any = (query.get('id') || '')
      setToken(jwt)
      await axios.get(`http://127.0.0.1:4200/api/v1/accounts/?${jwt}`).then(response => {
        localStorage.setItem('id', jwt)
        console.log(response.data[0]);
        localStorage.setItem('firstName', response.data[0].firstName);
        localStorage.setItem('lastName', response.data[0].lastName);
        localStorage.setItem('email', response.data[0].email)
      }
      )


    } catch (error) {
      console.log(error)
      console.log("alskdalkdajk")
    }
  }



  if (token && token?.exp) {
    return <PrivateRoutes />
  }
  return <PrivateRoutes />
  // return <SignRoutes />
}

export default Routes
