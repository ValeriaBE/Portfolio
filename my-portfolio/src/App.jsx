import './App.css'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
      <div className="max-w-[1200px] mx-auto lg:flex min-h-screen">

        <div className="lg:flex lg:w-[20%] w-full lg:fixed lg:h-full border-gray-800">
          <Sidebar />
        </div>

        <div className="w-full lg:ml-[40%] lg:w-[70%] overflow-x-hidden">
          <div className="px-6 md:px-12 py-12">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </div>
        </div>

      </div>
    </div>
  )
}


export default App
