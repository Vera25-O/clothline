import line1 from "./photos/line1.jpeg";
import line2 from "./photos/line2.jpeg";
import line3 from "./photos/line3.jpeg";
import line4 from "./photos/line4.jpeg";
import line5 from "./photos/line5.jpeg";
import line6 from "./photos/line6.jpeg";

function Home() {
  return <div className="home">
    <img src={line1} alt="" className="homp"/>
    <img src={line2} alt="" className="homp"/>
    <img src={line3} alt="" className="homp"/>
    <img src={line4} alt="" className="homp"/>
    <img src={line5} alt="" className="homp"/>
    <img src={line6} alt="" className="homp"/>
    {/* <img src={line1} alt="" className="homp"/>
    <img src={line1} alt="" className="homp"/> */}
  </div>;
}

export default Home;
