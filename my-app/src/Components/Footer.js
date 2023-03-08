import icon1 from "./photos/icon1.png";
import icon2 from "./photos/icon2.png";

function Footer() {
  return (
      <div className="footer">
        <hr></hr>
        <img src={icon1} alt="facebook" className="icons" />
<img src={icon2} alt="instagram" className="icons" />
    
      <p className="cright">© 2023 veraonuko. All rights reserved.</p>
    </div>
  );
}
export default Footer;
