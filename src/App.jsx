
import './App.css'
import Admissionform from './Pages/Admissionform'
import Footer from './components/Footer'
import StudentsDetail from './components/StudentsDetail'
import Nav from "./components/nav"

function App() {

  return (
    <>
     <div className=''>
      <Nav/>
    <Admissionform/>
    <StudentsDetail/>
    <Footer/>
     </div>
    </>
  )
}

export default App
