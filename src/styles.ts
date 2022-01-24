import styled from "styled-components";
import "typeface-space-mono"
import "typeface-lexend-mega"

export const Colors = [`#119da4`,`#ddedaa`,`#ebf065`,`#d7816a`,`#bd4f6c`];
const Theme = {
    colors: {
        black: `#000000`,
        white: `#FFFFFF`,
        blue: `#119da4`,
        green: `#eff387`,
        yellow: `#f0cf65`,
        orange: `#d7816a`,
        red: `#ff674d`,

    },
    fonts: {
        body: `Space Mono, monospace`,
        heading: `Lexend Mega, sans-serif`
    }
};

export const MainView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${Theme.colors.white};
  h1 {color: ${Theme.colors.red}; font-family: ${Theme.fonts.heading}; margin-bottom: 100px; font-size: 40pt; text-transform: lowercase; :hover {font-style: italic;};};
  h2 {color: ${Theme.colors.red}; font-family: ${Theme.fonts.heading}; font-size: 35pt; text-transform: lowercase; :hover {font-style: italic;};};
  h3 {color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 30pt; line-height: 10pt; margin: 100px 0pt 50px 0pt; background-color: ${Theme.colors.red}; text-transform: lowercase;};
  h4 {color: ${Theme.colors.red}; font-family: ${Theme.fonts.heading}; font-size: 25pt; text-transform: lowercase; };
  h5 {color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 20pt; text-transform: lowercase;};
  h6 {color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 15pt; line-height: 10pt; margin: 0; background-color: ${Theme.colors.red}; text-transform: lowercase;};
  p {color: ${Theme.colors.black}; font-family: ${Theme.fonts.body}; font-size: 13pt; text-transform: lowercase;};
  a {color: ${Theme.colors.black}; font-family: ${Theme.fonts.body}; font-size: 13pt; text-transform: lowercase;};
  a:link {color: ${Theme.colors.black}; padding: 0;};
  a:link:hover {color: ${Theme.colors.red}; text-decoration: none;};
  a:link:active {color: ${Theme.colors.blue}; text-decoration: none;};
  a:link:visited {color: ${Theme.colors.black}; text-decoration: none;};
  a:visited {color: ${Theme.colors.black}; text-decoration: none;};
  a:visited:hover {color: ${Theme.colors.red}; text-decoration: none;};
  a:visited:active {color: ${Theme.colors.blue}; text-decoration: none;};
  img {
    max-height: 400px;
    margin: 20px;
    width: auto;
    h2 {
    display: none;
    }
    :hover {
      opacity: .6;
      h2 {
          display: static;
      }
    };
  };
  @media only screen and (max-width: 600px) {
    a {font-size: 14pt;};
    h1 {font-size: 20pt;};
    h2 {font-size: 20pt;};
    h3 {font-size: 20pt;};
    h4 {font-size: 14pt;};
    h5 {font-size: 14pt;};
    h6 {font-size: 12pt;};
    h7 {font-size: 12pt;};
  }
`;


export const Disclaimer = styled.div`
    width: calc(100vw - 174px);
    height: 94px;
    left: 20px;
    background-color: ${Theme.colors.green};
    position: fixed;
    bottom: 10px;
    font-size: 10pt;
    padding: 5px;
    font-family: ${Theme.fonts.body};
    z-index: 5;
    @media only screen and (min-width: 600px) {
        display: none;
    }
`;

export const Hamburger = styled.div<{open: boolean}>`
    width: 100px;
    border: 2px solid black;
    height: 100px;
    background-color: ${(props) => props.open ? `` : `rgba(0,0,0,0.8)`};
    position: fixed;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: bold;
    font-size: 16pt;
    z-index: 12;
    font-family: ${Theme.fonts.heading};
    div {
        background-color: ${Theme.colors.red};
        width: 50px;
        height: 10px;
    }
    :hover {
        color: ${Theme.colors.red};
        div {
            background-color: ${Theme.colors.black};
        }
    }
    @media only screen and (min-width: 600px) {
    display: none;

  }
`;
export const Nav = styled.nav<{open: boolean}>`
  height: 100vh; 
  width: 300px;
  position: fixed;
  background-color: rgba(255,255,255,0.9);
  a {
    margin-left: 30px;
    margin-right: 20px;
  }
  a.sub {
    margin-left: 50px;
    margin-right: 20px;
  }
  h4 {
  margin: 20px;
  }
  h5 {
    margin: 20px;
    // text-decoration: underline;
    :hover {
        color: ${Theme.colors.red};
        font-style: italic;
    };
  }
  h2 {
    margin: 20px;
  }
  overflow: auto;
  
    @media only screen and (max-width: 600px) {
    display: ${(props)=> props.open ? ``: `none`};
    width: 100vw;
    z-index: 2;
    position: fixed:
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const NavCategory = styled.h3`
  color: ${(props) => props.color};
`;

export const CenteredPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100vw - 300px);
  height: 100vh;
  overflow: auto;
  @media only screen and (max-width: 600px) {
    width: 100vw;

  }

`;
