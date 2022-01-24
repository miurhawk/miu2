import * as React from "react";
import {Disclaimer, Hamburger, Nav} from "../styles";
import {useState} from "react";



export const NavCol = () => {
        function onClickArt() {
                window.location.replace("/art");
        }
        function onClickClimbing() {
                window.location.replace("/climbing");
        }
        function onClickTech() {
                window.location.replace("/tech");
        }
        function onClickMiu() {
                window.location.replace("/");
        }

        const [open, setOpen] = useState(false);
        const [hideDisclaimer, setHideDisclaimer] = useState(false);
    return (
        <>
                <Hamburger open={open} onClick={()=>setOpen(!open)} >
                        {/*<div/>*/}
                        {open ? `close` : `open`}
                        {/*<div/>*/}
                </Hamburger>
                <Disclaimer style={{display: hideDisclaimer ? `none`: ``}} onClick={()=>setHideDisclaimer(true)}>
                        this page was not optimized for mobile devices. sorry. (click 2 hide).
                </Disclaimer>
        <Nav open={open}>

                <h4 onClick={onClickMiu}>miura<br/>elizabeth<br/>hawkins</h4>
            <h5 onClick={onClickClimbing}>climbing</h5>
            {/*<a href="/climbing">climbing</a>*/}
            {/*<br />*/}
            <a href="/climbing#resources">resources</a>
            <br />
            <a href="/climbing#coaching">coaching</a>
                <br />
            <a href="https://www.gebla.mt">Ġebla</a>
            <h5 onClick={onClickTech}>computing</h5>
            <a href="https://www.chalk-technologies.com">chalk</a>
            <br />
            <a href="https://www.github.com/miurhawk">github</a>
            <br />
            <a href="/tech#consulting">consulting</a>
            <h5 onClick={onClickArt}>creating</h5>
            <a href="/art#screenprints">screenprints</a>
            <br />
            <a href="/art#digital">digital</a>
            <br />
            <a href="/art#video">video</a>
            <br />
            <a href="https://medium.com/@miura.hawkins">writing</a>
            <br />
            <br />
            <h5 style={{color: `#ff674d`}}>mi + u</h5>
            <a href="/contact">contact</a>
            <br />
                <a href="/CVMiura.pdf">cv</a>
                <br />
                <a href="/privacy">privacy</a>
        </Nav>
                </>
    )
};

