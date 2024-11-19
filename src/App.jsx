import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import FullScreenLyrics from './components/FullScreenLyrics'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:fileName" element={<FullScreenLyrics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 