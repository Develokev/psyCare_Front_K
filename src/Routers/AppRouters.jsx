import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../Home/Pages/HomePage'
import { LoginPage } from '../Auth/Page/LoginPage'
import { RegisterPage } from '../Auth/Page/RegisterPage'

export const AppRouters = () => {

  return (

    <>

        <Routes>

            <Route path='home' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={'/'} />} />

        </Routes>
    
    </>

  )
}
