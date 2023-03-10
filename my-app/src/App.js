import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Fashion from "./Components/Fashion"
import Blog from "./Components/Blog";
import { Routes,Route } from "react-router-dom";
import Navtwo from "./Components/Navtwo";
import Navone from "./Components/Navone";
import Trendy from "./Components/Trendy";
import SearchBar from "./Components/SearchBar";
import Refund from "./Components/Refund"
import About from "./Components/About"
import Terms from "./Components/Terms"
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
     <Route exact path="/searchBar" element={<SearchBar/>}/>
     <Route exact path="/about" element={<About/>} />
     <Route exact path="/about" element={<About/>} />
     <Route exact path="/terms" element={<Terms/>} />
     <Route exact path="/refund" element={<Refund/>} />
    
     </Routes> 
     <Footer/>
    </div>
  );
}

export default App;
