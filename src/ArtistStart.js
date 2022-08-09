import { Link } from "react-router-dom"

function Artiststart() {
  
  return ( <>
    <div style={{height:"100vh"}}className="overflow-hidden">
      <div className="bg-hero-pattern bg-cover bg-fixed h-2/5 bg-bottom flex flex-col items-center justify-center">
        <h2 className="text-white text-8xl">Start Your Journey</h2>
      {/* </div>
      <div className="bg-pink-700 h-3"> */}
      </div>
      <div className=" w-2/4 mx-auto mt-20 place-content-center">
        <div className="text-pink-700">
          <Link to='/artist-login'>
            <button className="ml-[5%] bg-black text-white py-3 text-2xl border-solid border-2 border-black rounded-xl w-[90%] mt-5">Sign In</button>
          </Link>
          <Link to='/artist-register'>
            <button className="ml-[5%]  text-black py-3 text-2xl border-solid border-2 border-black rounded-xl w-[90%] mt-8 ">Sign up</button>
          </Link>
          <Link to='/venues'>
            <button className="ml-[5%] text-black py-3 text-2xl w-[90%] my-20 underline">Continue as Guest</button>
          </Link>
          
        </div>
      </div>
    </div>
    </>
    )
  
  }

export default Artiststart