
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import Paths from './Routes/Paths.jsx'

createRoot(document.getElementById('root')).render(
    <Paths />
)
