import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Container from './components/Container'
import { DashProvider } from './Context'
function App() {

  return (
    <>
      <BrowserRouter>
      <DashProvider>
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </Container>
        </DashProvider>
      </BrowserRouter>
    </>
  )
}

export default App
