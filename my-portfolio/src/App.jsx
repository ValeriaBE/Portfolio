import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto flex min-h-screen">
        
        <div className="hidden lg:flex w-[20%] fixed h-full border-gray-800">
          <Sidebar />
        </div>

        <div className="w-full lg:ml-[40%] lg:w-[70%] overflow-x-hidden">
          <div className="px-6 md:px-12 py-12">
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>

      </div>
    </div>
  )
}


export default App
