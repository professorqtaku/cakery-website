import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Header from './components/Header'
import NotFound from './routes/NotFound'
import About from './routes/About'
import Products from './routes/Products'
import Contact from './routes/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer className="mt-auto" />
    </div>

  )
}

export default App
