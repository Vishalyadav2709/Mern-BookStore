import React from "react";
import { render } from "react-dom";
import Footer from "react-footer-comp";
import './Footer.css'


const Appp = () => (
  <div className="foot">
   
    <Footer
    
      copyrightIcon
      years={[2022]}
      height={50}
      bgColor={"#8568B4"}
      copyrightText
      copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
      text={"All rights reserved."}

    />
    
  </div>
);

render(<Appp />, document.getElementById("root"));
export default Appp;
