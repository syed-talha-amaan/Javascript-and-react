import React from "react";

function Footer(){
  var cy=new Date().getFullYear();
  return(
    <footer>
      <p>Copyright @ {cy} </p>
    </footer>
  );
}

export default Footer;