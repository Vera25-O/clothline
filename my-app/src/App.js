import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Fashion from "./Components/Fashion"
import Blog from "./Components/Blog";
import { Routes,Route } from "react-router-dom";
import Navtwo from "./Components/Navtwo";
import Navone from "./Components/Navone";
import Trendy from "./Components/Trendy";
function App() {
  return (
    <div className="App">
      <Navone/>
      <Navbar/>
      <Navtwo/>
        <Routes> 
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/blogs" element={<Blog/>} />
     <Route exact path="/trendy" element={<Trendy/>} />
     <Route exact path="/fashion" element={<Fashion/>} />
    
     </Routes> 
     <Footer/>
    </div>
  );
}

export default App;
