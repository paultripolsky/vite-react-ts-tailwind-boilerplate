import { BrowserRouter } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import AppRouter from '@/router/AppRouter'
import '/src/index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
