import icon1 from "./photos/icon1.png";
import icon2 from "./photos/icon2.png";
function Navone()
{
    return(
<div className="navone">
<a href="https://www.facebook.com/home.php" target={"_blank"} rel={"noreferrer"}><img src={icon1} alt="facebook" className="icon1" /></a>
<a href="https://www.instagram.com/?utm_source=pwa_homescreen" target={"_blank"} rel={"noreferrer"}><img src={icon2} alt="instagram" className="icon2" /></a>
    
    
</div>
    )
}
export default Navone;