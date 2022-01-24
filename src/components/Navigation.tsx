import * as React from "react";

import {Navbar, BrandA, Launch,} from "../styles";
import {useEffect, useState} from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";




const Navigation = () => {

  const [active, setActive] = useState("climbers");

  useEffect(()=>{

    let queryString = window.location.href.split("for=")[1];

    if (queryString) {
      setActive(queryString);
    }
    // var re = /%20/gi;
    // queryString = queryString.replace(re, " ");
  })

  console.log(active);
  return (
    <Navbar>
      <BrandA onClick={()=>window.location.replace("/")} />
      {/*{active != "climbers" ? <a style={{margin: `10px`}} href="/first-time" onClick={() => close()}>for climbers</a> : <span style={{fontWeight:  `bold`}}>for climbers</span>}*/}
        <a style={{margin: `10px`}} href="/#forClimbers" >for climbers</a>
        <a style={{margin: `10px`}} href="/#forGyms" >for gyms</a>
      {/*<MobileView>*/}
          {isMobile ? <Launch onClick={()=>window.open("https://beta.chalk-technologies.com/gyms/1")}>launch BETA</Launch> : <Launch onClick={()=>window.open("https://web.chalk-technologies.com/gym?id=1")}>launch BETA</Launch>}
      {/*</MobileView>*/}
      {/*<BrowserView>*/}
      {/*  */}
      {/*</BrowserView>*/}
    </Navbar>
  )
};


export default Navigation;

