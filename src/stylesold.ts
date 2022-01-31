import styled, { createGlobalStyle } from "styled-components";
import "typeface-raleway";
import "typeface-russo-one";
import {Theme} from "./styles";

//
// export const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: stretch;
//     color: ${Theme.colors.black};
//     font-family: ${Theme.fonts.body};
//     font-size: 14pt;
//     background-color: ${Theme.colors.grey};
//     h1 {color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 40pt;}
//     h2 {color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 40pt;}
//     h3 {color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 30pt;}
//     h4 {color: ${Theme.colors.orange}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 18pt; margin: 10px;}
//     h5 {color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading};}
//     h6 {color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 20pt; margin: 0;}
//     a:link {color: ${Theme.colors.black}; text-decoration: none; padding: 0;}
//     a:link:hover {font-weight: bold; text-decoration: none;}
//     a:link:active {color: ${Theme.colors.orange}; text-decoration: none;}
//     a:link:visited {color: ${Theme.colors.black}; text-decoration: none;}
//     a:visited {color: ${Theme.colors.black}; text-decoration: none;}
//     a:visited:hover {font-weight: bold; text-decoration: none;}
//     a:visited:active {color: ${Theme.colors.orange}; text-decoration: none;}
//     @media only screen and (max-width: 800px) {
//       font-size: 12pt;
//       h1 {font-size: 40pt;}
//       h2 {font-size: 40pt;}
//       h3 {font-size: 27pt;}
//       h4 {font-size: 24pt;}
//       h5 {font-size: 24pt;}
//       h6 {font-size: 19pt;}
//       h7 {font-size: 14pt;}
//     }
//   }
// `;


export const BrandA = styled.div`
  margin-left: 0;
  margin-right: auto;
  height: 50px;
  width: 120px;
  cursor: pointer;
  background-image: url(./img/logoHorzBlack.png);
  background-size: contain;
  align-self: flex-start;
  justify-self: flex-start;
  background-repeat: no-repeat;
  background-position: left;
  flex-grow: 0;
  -webkit-flex-grow: 0;
    @media only screen and (max-width: 800px) {
      width: 100px;
    }
`;

export const Launch = styled.button`
  margin-right: 10px;
  margin-left: auto;
  font-size: 12pt;
  padding: 0 10px;
  height: 30px;
  cursor: pointer;
  border: 2px solid ${Theme.colors.white};
  background-color: rgba(255, 255, 255, 0.6);
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.black};
  border-radius: 15px;
  min-width: 80px;
  justify-self: flex-end;
  flex-grow: 0;
  -webkit-flex-grow: 0;
  :hover {
    background-color: rgba(255, 255, 255, 1);
    font-weight: bold;

  }
  @media only screen and (max-width: 800px) {
    margin-right: 0;
      font-size: 10pt;
    }
`;

export const BookButton = styled.button`
  background-color: rgba(255, 255, 255, 0.6);
  height: 60px;
  margin: 150px 230px 150px 230px;
  cursor: pointer;
  width: 140px;
  align-self: center;
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.body};
  font-size: 12pt;
  border: 2px solid ${Theme.colors.white};
  border-radius: 30px;
  :hover {
    background-color: rgba(255, 255, 255, 1);
    font-weight: bold;
  }
`;

export const Social = styled.button`
    height: 36px;
    width: 36px;
    border: none;
    margin: 0 15px;
    border-radius: 18px;
    background-color: ${Theme.colors.black};
    font-size: 18pt;
    color: ${Theme.colors.white};
    :hover {
        background-color: ${Theme.colors.orange};
    }
`;
export const GroupRow = styled.div`
  min-height: 40px;
  min-width: 60px;
  justify-self: right;
  display: flex;
`;

export const PageTitle = styled.h2`
  padding-right: 2rem;
  padding-bottom: 0;
  padding-top: 0;
  height: 1rem;
`;

export const Headline = styled.h1`
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0;
  text-align: center;
  flex-grow: 0;
`;

export const OutlineDiv = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  @media only screen and (max-width: 800px) {
    p {
      margin: 0 10px;
      text-align: center;
    }
    width: 100%;
    order: 1;
    padding: 0;
    }
`;

export const Navbar = styled.nav`
  top: 0;
  font-size: 12pt;
  height: 50px;
  width: 100vw;
  text-align: center;
  background: ${Theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  z-index: 2;
  @media only screen and (max-width: 800px) {
    font-size: 8pt;
    }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  flex-grow: 0;
  -webkit-flex-grow: 0;
`;

export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
`;

export const Divider = styled.div`
  width: 100vw;
  align-self: center;
  height: 2px;
  border-radius: 10px;
  background-color: ${Theme.colors.blue};
  :hover {
    background-color: ${Theme.colors.orange};
  }
`;

export const FlexAColumnFill = styled.a`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-wrap: wrap;
  min-width: 40vw;
  href: ${props => props.href};
  transition: min-width 0.5s;
  -webkit-transition: min-width 0.5s;
  -moz-transition: min-width 0.5s;
  -o-transition: min-width 0.5s;
  :hover {min-width: 55vw;};
`;

export const FlexRowFill = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 450px;
  -webkit-flex-grow: 1;
  align-items: ${props => props.right ? `flex-start` : `flex-end`};
  flex-wrap: wrap;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  h2 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  h3 {
    align-self: center;
    transition: font-size 0.5s;

  }
  :hover {
    h3 {
      font-size: 55pt;
    }
  }
  @media only screen and (max-width: 800px) {
    min-height: 30vh;
    :hover {
      h3 {
        font-size: 30pt;
      }
    }
  }
`;


export const FullPhoto = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${Theme.colors.black};
  -webkit-flex-grow: 1;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  background-size: cover;
  background-position: center;
  min-height: 20rem;
  width: calc(100% - 40px);
  text-align: left;
  font-size: 20pt;
  color: ${Theme.colors.white};
  padding: 20px;
  font-weight: bold;

  button {
    align-self: flex-end;
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    margin: 0;
  }
  //
  // :hover {
  //   font-size: 24pt;
  //  }
  //
  // transition: font-size 0.5s;
`;


export const PartialPhoto = styled.div<{ left: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color:
  -webkit-flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-size: contain;
  background-position: ${(props) => props.left ? `left` : `right`};
  background-repeat: no-repeat;
  text-align: left;
  font-size: 20pt;
  color: ${Theme.colors.white};
  margin: 20px;
  width: 30%;
  height: 600px;
  font-weight: bold;

  button {
    align-self: flex-start;
    margin: 0 0 0 3rem;
    width: 250px;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 500px;
    background-position: center;
    order: 2;
  }

  :hover {
    background-position: center;
   }

  transition: background-position 0.5s;
`;


export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-contents: space-evenly;
  padding: 1rem 0;
  margin: 0;
  width: 100%;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: nowrap;
  href: ${props => props.href};
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const DetailCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding: 1rem 0;
  width: 100%;
  margin: 0;
  href: ${props => props.href};
  h3 {
    margin: 0;
    padding-bottom: 20px;
  }
  div.text {
    padding: 1rem 20vw 1rem 20vw;
    text-align: center;
  };
  @media only screen and (max-width: 800px) {
    div.text {
      padding: 10px;
    };
  }
`;

export const AppStoreButton = styled.button`
  height: 50px;
  width: 150px;
  cursor: pointer;
  border: none;
  margin: auto;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const PricingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding: 10px;
  font-weight: bold;
  width: 250px;
  margin: 20px;
  @counter-style repeating-emoji {
    system: cyclic;
    symbols: "📈" "🧑🏻‍🤝‍🧑🏿" "🪛" "ℹ️" "📘"; // unicode code point
    suffix: "   ";
  }
  font-size: 12pt;
  ul {
    list-style-type: repeating-emoji;
    padding: 0;
    padding-left: 30px;
    margin: 10px;
    text-align: left;
  }
  text-align: center;
  height: 400px;
  border: 4px solid ${Theme.colors.white};
  href: ${props => props.href};
  @media only screen and (max-width: 800px) {
    margin: auto;
    margin-top: 20px;
    width: 65%;
  }
  :hover {
    background-color: rgba(255,255,255,0.6);
    cursor: pointer;
  }
`;

export const TC = styled.div`
  position: fixed;
  bottom: 0;
  padding: 0;
  height: ${props => props.show ? `50px` : `0`};
  width: calc(100% - 20px);
  padding-left: 20px;
  overflow: auto;
  background: ${Theme.colors.orange};
  font-family: ${Theme.fonts.heading};
  text-transform: uppercase;
  display: ${props => props.show ? `flex` : `none`};
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  color: ${Theme.colors.white};
  z-index: 2;
  div {
    width: auto;
    flex-grow: 0;
    margin: 0 0 0 auto;
    padding: 0;
    justify-content: flex-end;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media only screen and (max-width: 800px) {
    button {
      margin: 5px;
    }
  }
`;

export const SmallDetailCol = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding: 1rem 3rem;
  flex-grow: 1;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
  text-align: center;
  href: ${props => props.href};
  button {
    margin: 0;
    height: 30px;
    width: 100px;
  }
  @media only screen and (max-width: 800px) {
    max-width: 100vw;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 600px;
  align-items: stretch;
  justify-content: space-evenly;
  align-self: center;
  label {
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    font-size: 14pt;
    padding: 5px;
  };
  select {
    background-color: ${Theme.colors.white};
    border: none;
  };
  input {
    background-color: ${Theme.colors.white};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };
  .input__submit {
    border: none;
    border-radius: 20px;
    :hover {
      background-color: ${Theme.colors.white};
      font-weight: bold;
    }
  }
  select {
    background-color: ${Theme.colors.white};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };

  label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    select {
      flex-grow: 1;
      margin-left: 10px;
    };
    input {
      flex-grow: 1;
      margin-left: 10px;
    };

  };
  @media only screen and (max-width: 800px) {
    max-width: 90vw;
  }

`;

export const StyledFormLight = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 600px;
  background-color: ${Theme.colors.white};
  align-items: stretch;
  justify-content: space-evenly;
  align-self: center;
  label {
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    font-size: 14pt;
  };
  select {
    background-color: ${Theme.colors.white};
    border: none;
  };
  input {
    background-color: ${Theme.colors.white};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };
  .input__submit {
    border: none;
    border-radius: 20px;
    :hover {
      background-color: ${Theme.colors.white};
      font-weight: bold;
    }
  }
  select {
    background-color: ${Theme.colors.white};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };

  label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    select {
      flex-grow: 1;
      margin-left: 10px;
    };
    input {
      flex-grow: 1;
      margin-left: 10px;
    };

  };
  @media only screen and (max-width: 800px) {
    max-width: 90vw;
  }

`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50vw;
  padding: 1vw 1vw 0 1vw;
  text-align: ${props => props.right ? `left` : `right`};
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  href: ${props => props.href};

  h1 {
    margin: 0;
  }
  h1:nth-child(2) {
    padding: 0.5rem 2rem 0 2rem;
  }
  h2 {
    margin: 0;
  }
  h2:nth-child(2) {
    padding-top: 0.5rem 0 0 2rem;
  }
  button {
    align-self: ${props => props.right ? `flex-start` : `flex-end`};
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
    text-align: center;
    h2 {
      padding: 2rem 2rem 0 2rem;
    }
    h1 {
      padding: 2rem 2rem 0 2rem;
    }
    button {
      align-self: center;
    }
  }

`;


export const HalfImageText = styled.div`
  display: flex;
  width: 48vw;
  margin: ${(props) => props.right ? `0 0 0 2vw` : `0 2vw 0 0`};
  align-items: ${(props) => props.right ? `flex-start` : `flex-end`};
  flex-wrap: wrap;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  text-align: ${props => props.right ? `left` : `right`};
  h2 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  h3 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  @media only screen and (max-width: 800px) {
    width: 100vw;
    min-height: 400px;
    margin: 0;
    h2 {
      padding: 2rem 2rem 0 2rem;
    }
    h3 {
      padding: 2rem 2rem 0 2rem;
    }
    order: 1;
  }

`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.orange};
  href: ${props => props.href};
  position: relative;

  button {
    z-index: 1;
    border: none;
    position: fixed;
    flex-direction: row;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    height: 100%;
    width: 150px;
    outline: none;
    background-color: transparent;
    position: absolute;
    top: 0%;
    padding: ${props => props.right ? `0 2vw 0 4vw` : `0 4vw 0 2vw`};
    div {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: ${Theme.colors.blue};
    }
    :hover {
      div {
        background-color: ${Theme.colors.orange};
      }
    }
  }
  button:nth-child(1) {
    align-self: flex-start;
  };
  button:nth-child(2) {
    align-self: flex-end;
    justify-content: flex-end;
  };
  @media only screen and (max-width: 800px) {
    button {
      margin: 0 2vw 0 2vw;
      height: 400px;

    }
    width: 100%;
    order: 1;
  };
`;


export const InfoItems = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  flex-grow: 0;
  -webkit-flex-grow: 0;
  align-content: stretch;
  height: ${props => props.height};
  justify-content: center;
`;

export const GalleryDots = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
  right: 40px;
  z-index: 0;
  justify-content: space-evenly;
  padding-bottom: 1rem;
`;

export const InfoItem = styled.div<{isActive: boolean, img: string, color: string, darkenHover: boolean}>`
  :hover {
    background-color: ${(props) => props.isActive ? `` : props.darkenHover ? Theme.colors.black : `rgba(255,255,255,0.4)`};
    font-weight: bold;
  };
  opacity: ${(props) => props.img ? props.isActive ? 0.5 : 1 : 1};
  background-image: url(${( props ) => props.img});
  align-items: center;
  background-size: cover;
  background-position: left;
  cursor: pointer;
  flex-grow: 1;
  flex-basis: 0;
  -webkit-flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  transition: background-color 0.5s;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
  padding: 10px;
  border-radius: 25px;

  margin: 5px;
  font-weight: ${(props) => props.isActive ? `bold` : ``};
  font-size: 14pt;
  color: ${(props) => props.isActive ? Theme.colors.black : Theme.colors.black};
  h3 {
    padding: 0 10px 0 10px;
  }
  div {
    position: ${({ open }) => open ? `fixed` : `relative` };
    top: ${({ open }) => open ? `50px`: `0` };
    width: 40px;
    height: 2px;
    border-radius: 10px;
    background-color: ${Theme.colors.blue};
    transition: transform 0.5s ease;
    z-index: 4;
    }

  div:nth-child(2) {
    transform: rotate(45deg);
  }
  div:nth-child(1) {
    transform: rotate(-45deg);
  }
  div:nth-child(3) {
    transform: rotate(-45deg);

  };
  @media only screen and (max-width: 800px) {
      font-size: 12pt;
  };
`;


export const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-direction: column;
  min-height: 500px;
  padding: 0;
  text-align: center;
  padding-top: ${props => props.padding};
  background-image: url(${props => props.img});
  background-size: cover;
  margin: 0;
`;

export const GalleryDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-direction: column;
  height: 30vw;
  text-align: center;
  background-image: url(${props => props.img});
  background-size: cover;
  z-index: 0;
  `;

export const GalleryDot = styled.div`
  width: 15px;
  height: 15px;
  align-self: center;
  position: relative;
  border-radius: 15px;
  z-index: 0;
  background-color: ${(props) => props.isActive ? Theme.colors.black : Theme.colors.white};
  :hover {
    background-color: ${(props) => props.color };
}
`;

export const LRGalleryButtons = styled.div`
  width: 20%;
  height: 100%;
  z-index: 1;
  left: 0;
  background-color: #999;
`;

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  align-items: stretch;
  align-self: center;
  th {color: ${Theme.colors.blue}; font-size: 14pt; font-family: ${Theme.fonts.body}; padding: 0px; text-align: left;}
  tr {color: ${Theme.colors.white}; font-family: ${Theme.fonts.body}; padding: 10px; text-align: left;}
  button {
    width: 50px;
    margin: 10px;
  }
  @media only screen and (max-width: 800px) {
    th {
      font-size: 10pt;

    }
    tr {
      font-size: 10pt;
    }
    button {
      width: 20px;
      height: 30px;
    }
  };

`;
