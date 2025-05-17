import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './features/Login'
import Register from './features/Register'
import StaticTable from './features/StaticTable'
import Protected from './features/Protected'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={
            <Protected>
              <StaticTable />
            </Protected>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
