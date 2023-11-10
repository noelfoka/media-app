import { Routes, Route } from 'react-router-dom'

import './globals.css'

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public route */}
            <Route path='/sign_in' element={<SigninForm />} />

            {/* Private route */}
            <Route index element={<Home />} />

        </Routes>
    </main>
  )
}

export default App