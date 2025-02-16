
import StateComponent from "../components/Statedropdown"
import CountryComponent from "../components/countrydropdown"
function ContactDetail() {
  return (
    <div><div className=' md:w-[100%] w-full  mt-12'>
    <div className=''>
      <div className=' flex py-3 md:mx-16 mx-3 pl-4 items-center border border-t-0 border-r-0 border-b  border-slate-100 mt-5 shadow-md bg-[#e9edf4] '>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-address-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><path d="M10 16h6" /><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8h3" /><path d="M4 12h3" /><path d="M4 16h3" /></svg>
        <h1 className='pl-2 font-bold text-lg  bg-[#e9edf4]  '>Contact Details</h1>

      </div>

      <div className='md:mx-16 mx-3 md:grid-cols-3 grid-cols-1 grid pt-5 px-5 gap-8 shadow-md bg-[#ffffff]  '>
      <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Contact Number</h1>
          <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm   rounded focus:outline-none border border-slate-200 bg-white' type="text" />
        </div>
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Email</h1>
          <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm   rounded focus:outline-none border border-slate-200 bg-white' type="text" />
        </div>
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Parent Contact Number</h1>
          <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm   rounded focus:outline-none border border-slate-200 bg-white' type="text" />
        </div>

         

         <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold'>Address</h1>
          <input autoComplete='name' className='mt-1 w-full  px-3 py-2 text-sm  rounded focus:outline-none border hover:border-slate-200  text-black border-slate-200 bg-white' type="text" />
        </div>
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold'>City</h1>
          <input autoComplete='name' className='mt-1 w-full px-3 py-2 text-sm  rounded focus:outline-none border  border-slate-200 bg-white' type="text" />
        </div>
        {/* <div className='md:pb-5 pb-0'>
          <label htmlFor="gender" className='text-sm font-bold'>Gender</label>
          <div className="relative">
            <select autoComplete='gender' className="text-sm w-full   focus:outline-none border border-slate-200  bg-white  px-3 py-2 pr-8  rounded-lg shadow-sm appearance-none">
              <option value="" className="text-gray-500 ">Select</option>
              <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Male</option>
              <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Female</option>
            </select>
            {/* <svg className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
          {/* </div> */}
        {/* </div> */}
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold'>State</h1>
          <StateComponent/>
        </div>
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Postal Code</h1>
          <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm   rounded focus:outline-none border border-slate-200 bg-white' type="text" />
        </div>
        <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Country</h1>
          <CountryComponent/>
        </div>

        {/* <div className='pb-5' >
          <h1 className='text-sm font-bold'>Admission Date</h1>
          <input autoComplete='bday' type="date" className="  w-full text-sm  focus:outline-none border border-slate-200 bg-white  rounded px-3 py-2 mt-1 dark:text-white"></input>

        </div> */}

        {/* <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold '>Grade Applying for</h1>
          <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm   rounded focus:outline-none border border-slate-200 bg-white' type="text" />
        </div> */}
        {/* <div className='md:pb-5 pb-0'>
          <h1 className='text-sm font-bold'>Martial Status</h1>
          <div className="relative">
            <select autoComplete='Martial' className="text-sm w-full mt-1 focus:outline-none border border-slate-200  bg-white  px-3 py-2 pr-8  rounded-lg shadow-sm appearance-none">
              <option value="" className="text-gray-500 ">Select</option>
              <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Single</option>
              <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Married</option>
            </select>
            {/* <svg className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
          {/* </div> */}
        {/* </div> */}
        {/* <div className='pb-5' >
          <h1 className='text-sm font-bold'>Date of Birth</h1>
          <input autoComplete='bday' type="date" className="  w-full text-sm  focus:outline-none border border-slate-200 bg-white  rounded px-3 py-2 mt-1 dark:text-white"></input>

        </div> */}
      </div>

    </div>
  </div>
  
  <div className=' md:w-[100%] w-full mt-12'>
          <div className=''>
            <div className=' flex py-3 pl-4 items-center md:mx-16 mx-3 border border-t-0 border-r-0 border-b  border-slate-100 mt-5 shadow-md bg-[#e9edf4] '>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>
              <h1 className='pl-2 font-bold text-lg  bg-[#e9edf4]  '>Notes</h1>

            </div>

            <div className=' md:mx-16 mx-3  grid-cols-1 grid pt-5 px-5 gap-4 shadow-md bg-[#ffffff]  '>
            

            <div className='md:pb-5 pb-0 mb-5 '>
                <h1 className='text-sm font-bold'>Notes</h1>
                <textarea autoComplete='name' className='mt-1 w-full h-24  px-3 py-2 text-sm  rounded focus:outline-none border hover:border-slate-200  text-black border-slate-200 bg-white' type="text" />
              </div>
            </div>

          </div>
        </div>
  </div>
  )
}

export default ContactDetail