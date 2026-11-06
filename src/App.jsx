import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Community from './pages/Community'
import Insights from './pages/Insights'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() { const location = useLocation(); return <div className="appShell"><Navbar /><main className="routeContent"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Projects />} /><Route path="/community" element={<Community />} /><Route path="/insights" element={<Insights />} /><Route path="/experience" element={<Experience />} /><Route path="/contact" element={<Contact />} /></Routes></main>{location.pathname !== '/' && <Footer />}</div> }
