import icon1 from "./photos/icon1.png";
import icon2 from "./photos/icon2.png";

import { NavLink } from "react-router-dom";
function Footer() {
  return (
    

    
      <div className="footer">
        <div className="nav">
        <nav >
          <NavLink to="/searchBar" exact="true">
            <p className="fp">Search</p>
          </NavLink><br></br>
          <NavLink to="/about" exact="true">
            <p className="fp">About Us</p>
          </NavLink>
          <NavLink to="/terms" exact="true">
            <p className="fp">Terms of Use</p>
          </NavLink>
          <NavLink to="/refund" exact="true">
            <p className="fp">Refund policy</p>
          </NavLink>
          <NavLink to="/privacy" exact="true">
            <p className="fp">Privacy & Security</p>
          </NavLink>
          
          
        </nav>
        </div>
        <div className="location">
        <h4>LOCATION</h4>
        <p className="lp">Online Thrift store<br></br>
        <h4>CONTACT</h4><br></br>
        Email:<br></br>
         verawakiiru@gmail.com<br></br>
         Phone:<br></br>
         +254748438571<br></br>
         <h4>OPERATION</h4>
         Open Days:<br></br>
         Monday -Saturday(8am-6pm)<br></br>
         Closed:<br></br>
         Sunday
        </p>
        </div>
        <hr></hr>


        <div className="iconic">
        <img src={icon1} alt="facebook" className="icons" />
<img src={icon2} alt="instagram" className="icons" />
</div>
      <p className="cright">© 2023 veraonuko. All rights reserved.</p>
    </div>
  );
}
export default Footer;
