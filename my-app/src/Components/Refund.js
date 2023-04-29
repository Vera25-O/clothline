function Refund(){
    return(
        <div>
            <h1>REFUND POLICY</h1>
            <p className="abtp">
                <p className="underline">Exchanges(If Applicable)</p>
            We only replace items if they are defective or damaged.<br></br> 
            If you need to exchange it for the same item, send us an contact us at +254748438571<br></br>
                <p className="underline">Delivery</p>
            You will be responsible for paying for your own delivery costs for returning your item.<br></br> 
            Delivery  costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.<br></br>
            Depending on where you live, the time it may take for your exchanged product to reach you, may vary.<br></br>
            </p>
        </div>
    )
}
export default Refund;

// import { NavLink } from "react-router-dom";
// import React from "react";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   const changeBackground = () => {
//     console.log(window.scrollY);
//     if (window.scrollY >= 200) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     changeBackground();
//     window.addEventListener("scroll", changeBackground);
//   });

//   return (
//     <nav className={navbar ? "navbar active" : "navbar"}>
      
//         <h7 className="logo">Nostr</h7>
//         <h7>Product</h7>
//         <h7>Solutions</h7>
//         <h7>Resources</h7>
//         <h7>|</h7>
//         <h7>Gallery</h7>
//         <h7>Pricing</h7>
//         <h7>Signing</h7>
//         <button>Request Demo</button>
//         <button>Get Started</button>
//     </nav>
    
//   );
// }
// export default Navbar;