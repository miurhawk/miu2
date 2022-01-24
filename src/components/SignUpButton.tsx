import * as React from "react";
import {BookButton} from "../styles";
import {isMobile} from "react-device-detect";

export const SignUpButton = () => {

    return (
        <BookButton onClick={()=> window.open(isMobile ? "https://beta.chalk-technologies.com" : "https://web.chalk-technologies.com")}>
            SIGN UP
        </BookButton>
    )
}

