import React from "react";
import { Link } from "react-router-dom";

function StartJourney() {

  return ( 
  <div style={{height:"100vh"}}className="overflow-hidden">
    <div className="bg-hero-pattern bg-cover bg-fixed h-2/5 bg-bottom flex flex-col items-center justify-center">
      <h2 className="text-white text-8xl">Start Your Journey</h2>
    {/* </div>
    <div className="bg-pink-700 h-3"> */}
    </div>
    <div className=" w-2/4 mx-auto mt-20 place-content-center">
      <div className="text-pink-700">
        <Link to='/artiststart'>
          <button className="ml-[5%] bg-black text-white py-3 text-2xl border-solid border-2 border-black rounded-xl w-[90%] my-8">I am an Artist</button>
        </Link>
        <Link to='/venuestart'>
          <button className="ml-[5%]  text-black py-3 text-2xl border-solid border-2 border-black rounded-xl w-[90%] mt-8">I am a Venue</button>
        </Link>
      </div>
    </div>
  </div>
  )

}

export default StartJourney