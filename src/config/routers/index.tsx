import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom"
import jwt_decode from "jwt-decode"
=======
import { useLocation } from "react-router-dom"
import axios from 'axios';
>>>>>>> f095ca526a2cd785dc3d52934ff20f689a34e610

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

<<<<<<< HEAD
function useQuery() {
=======
const useQuery = () => {
>>>>>>> f095ca526a2cd785dc3d52934ff20f689a34e610
  return new URLSearchParams(useLocation().search);
}

const Routes: React.FC = () => {
  const [token, setToken] = useState<any>(null)
<<<<<<< HEAD
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
=======
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
>>>>>>> f095ca526a2cd785dc3d52934ff20f689a34e610
      }
      )


    } catch (error) {
      console.log(error)
      console.log("alskdalkdajk")
    }
<<<<<<< HEAD
  }, [])
  console.log('TEETETETETETS', token)
  if (token && token?.exp ) {
=======
  }



  if (token && token?.exp) {
>>>>>>> f095ca526a2cd785dc3d52934ff20f689a34e610
    return <PrivateRoutes />
  }

  return <SignRoutes />
}

export default Routes
