import * as React from "react"
import { Foot, Social, GroupRow } from "../styles";

const Footer = () => {

  return (
    <Foot>
        <a href="mailto:info@chalk-technologies.com">info@chalk-technologies.com</a>
        <a href="tel:+35677726645">+356 7772 6645</a>
        <GroupRow>
            <Social onClick={()=>window.open("https://www.instagram.com/chalk.beta/")} >
                <i className="fa fa-instagram" />
            </Social>
            <Social onClick={()=>window.open("https://www.facebook.com/chalktechnologies")} >
                <i className="fa fa-linkedin" />

            </Social>
        </GroupRow>

    </Foot>
  )
};



export default Footer;
