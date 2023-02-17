import Navbar from "./Navbar";
import line3 from "./photos/line2.jpeg";
import line4 from "./photos/line3.jpeg";
import line5 from "./photos/line4.jpeg";
import line1 from "./photos/line5.jpeg";
import line2 from "./photos/line6.jpeg";



function Home() {
  return <div className="home">
    
    <Navbar/>
    <img src={line1} alt="" className="homp1"/>
    <img src={line2} alt="" className="homp2"/>
    <img src={line3} alt="" className="homp3"/>
    <img src={line4} alt="" className="homp4"/>
    <img src={line5} alt="" className="homp5"/>
    
    
    
  </div>;
}

export default Home;
