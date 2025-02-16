
import logo from "../assets/images/logoimg.png"
function Admissionform() {
  return (
    
    <div className="w-100% h-64  bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-16 rounded-xl mt-10 relative">
      <div className="absolute  mt-8 text-center flex justify-center items-center w-full ">
      <img src={logo} alt="" className="h-28 w-28 rounded-full "/>
      </div>

    

      <div className="h-24  bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-t-xl"></div>
      <div className="h-40">
        <h1 className="text-center mt-14 text-3xl">Shanthi Nikatan Higher Secondary School</h1>
      
      <h1 className="text-center text-2xl mt-2">Admission 2025-2026</h1>


      </div>

      
    </div>
    
  )
}

export default Admissionform
