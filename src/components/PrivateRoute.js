import React from 'react'
import { useAuthContext } from '../pages/Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ Component }) {
    const { isAuth } = useAuthContext()

    if (!isAuth) {
        return <Navigate to="/auth/login" />
    }
    return (
        <Component />
    )

}
