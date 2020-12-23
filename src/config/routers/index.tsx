import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom"
import jwt from "jsonwebtoken"

import SignRoutes from './signRoutes'
import PrivateRoutes from './privateRoutes'

const Routes: React.FC = () => {
  const [token2, setToken] = useState<any>(null)
  const match: any = useRouteMatch('/home/:id');

  useEffect(() => {
    handleLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleLogin() {
    try {
      const token: any = (match?.params?.id || '')
      setToken(token.toString())

      const tokenDecode: any = jwt.verify(token.toString(), '8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb')
      console.log(tokenDecode)

      localStorage.setItem('token', token.toString())
      localStorage.setItem('id', tokenDecode.id)
      localStorage.setItem('firstName', tokenDecode.first_name)
      localStorage.setItem('lastName', tokenDecode.last_name)
      localStorage.setItem('email', tokenDecode.email)
      localStorage.setItem('image_url', tokenDecode.url_image)


    } catch (error) {
      alert(error)
    }
  }


  if (token2) {
    return <PrivateRoutes />
  }

  return <SignRoutes />
}

export default Routes
