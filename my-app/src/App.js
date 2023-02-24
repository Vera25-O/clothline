import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Fashion from "./Components/Fashion"
import Blog from "./Components/Blog";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes> 
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/blogs" element={<Blog/>} />
     <Route exact path="/fashion" element={<Fashion/>} />
     </Routes> 
     <href></href>
     <Footer/>
    </div>
  );
}

export default App;
