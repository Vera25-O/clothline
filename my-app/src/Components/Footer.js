import icon1 from "./photos/icon1.png";
import icon2 from "./photos/icon2.png";

function Footer() {
  return (
      <div className="footer">
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
