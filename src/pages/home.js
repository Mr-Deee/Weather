import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import './home.css'
function Home() {
  return (


    <>

    <div className="Welcome">
    <div >
    <h1 className="texthi">Hi there,<span class="text-highlight">Welcome</span></h1>
                <p>Dash, home for all your checkins</p>

                <div className="image-container">
      <img src="path/to/your/image.jpg" alt="Scrollable Image" className="scrollable-image" />
    </div>
                
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