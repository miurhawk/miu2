import * as React from "react";
import {DetailRow, BookButton, FullPhoto, SmallDetailCol, DetailCol, FlexCol} from "../styles";

const towerImg = "./img/img81.jpg";//34


const Memberships = () => {

  return (
    <>
        <p>View <span style={{fontWeight: `bold`}}>stats</span> about your attempts, sends, and overall climbing style.
            Generate and save <span style={{fontWeight: `bold`}}>workouts</span> with BETA Sessions, or adapt a Session from one of the pros to your gym and climbing level.
            Get tips about which areas to work on to improve your <span style={{fontWeight: `bold`}}>weaknesses</span>.</p>
    </>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default Memberships;
