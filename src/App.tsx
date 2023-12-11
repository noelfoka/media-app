import { Routes, Route } from 'react-router-dom'

import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public route */}
            <Route element={<AuthLayout />}>
                <Route path='/sign_in' element={<SigninForm />} />
                <Route path='/sign_up' element={<SignupForm />} />
            </Route>

            {/* Private route */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>

        <Toaster />
    </main>
  )
}

export default App