/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import image1 from '../assets/Capture.PNG'
import './home.css'
function Home() {
  return (


    <>

    <div className="Welcome">
    <div >
    <h1 className="texthi">Hi there,<span class="text-highlight">Welcome</span></h1>
                <p>Dash, something something</p>

                {/* <div className="image-container">
      <img src={image1 }alt="Scrollable Image" className="scrollable-image" />
    </div> */}
                
  </div>

  
    
    </div>



    <div className="home">
      <h1>Home</h1>
      <AiOutlineHome className="page-icon" />
    </div>
    </>
  );
}

export default Home;