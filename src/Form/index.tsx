import * as React from "react";
import {DetailCol, StyledForm, Theme} from "../styles";
import { useState } from "react";
import ReactGA from "react-ga";
import {useRouter} from "next/router";


const Form = () => {
  const router = useRouter();
  const { product } = router.query;
  ReactGA.event({
  category: "Open Form",
  action: "User opened the form for "+product,
});

  const [gym, setGym] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    var text = name+"\nEmail: "+email+"\nGym: "+gym+"\nPhone: "+phone+"\n\n\nAdditional comments:\n"+comment;
    let data = JSON.stringify({
      text: text,
      title: "New BETA Inquiry",
      recipient: email,
      secret: "eE9n2p",
    });
    fetch("https://server.chalk-technologies.com/system/mail", {
          method: "POST",
          body: data,
        }).then( (response) => {

          console.log(response.status);
          if (response.status === 204) {
            router.push('/success');
            return
          } else {
            alert("There was an error sending the email, please try again");
          }
        });
  }


  return (
<DetailCol>
    <StyledForm style={{textAlign: `center`}} onSubmit={handleSubmit}>
      <h6>Request more info about BETA.</h6>
      <a style={{width: `100%`, padding: `10px 0`, margin: `0`}}>Tell us about yourself</a>

      <label>Full Name: <input type="text" required value={name} onChange={(e) => setName(e.target.value)} /></label>

      <label>Email: <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>

      <label>Contact No. (w/ Country Code): <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
      <label>Name of Gym: <input type="text" required value={gym} onChange={(e) => setGym(e.target.value)} /></label>


      <label>Comments: <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} /></label>

      <input className="input__submit" style={{backgroundColor: Theme.colors.light, height: `40px`, width: `150px`, border: `2px solid ${Theme.colors.grey}`, alignSelf: `center`}} type="submit" value="Submit" />
    </StyledForm>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </DetailCol>

  );
};

export default Form;
