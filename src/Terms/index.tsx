import * as React from "react";
import {useEffect, useState} from "react";
import {BookButton, Launch, TC, Theme} from "../styles";
import {useCookies} from "react-cookie";

const Terms = () => {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        if (cookies.geblatcaccept) {
            setAccepted(true);
        }
    })
    const [cookies, setCookie] = useCookies();
    function Accept(): void {
        setCookie("geblatcaccept", true);
        setAccepted(true);
    }
    return (

    <TC show={!accepted}>
            We use cookies.
        <div className={"row"}>
            <Launch onClick={() => window.location.href='/privacy#TC'}>+ info</Launch>
            <Launch onClick={Accept}>ok</Launch>
        </div>
    </TC>

  );
};

export default Terms;
