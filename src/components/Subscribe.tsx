import * as React from "react";
import {DetailCol, StyledFormLight, Theme} from "../styles";
import {useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL = "https://chalk-technologies.us7.list-manage.com/subscribe/post";
const MAILCHIMP_U = "aa9f252d99ae382858a684e9a";
const MAILCHIMP_ID = "d65df6f333";
// const MAILCHIMP_API_KEY = "f0ecaf43b1a8d1841fcc0ebe1403120a-us5";
export const Subscribe = () => {

    return (
        <DetailCol style={{backgroundColor: Theme.colors.light}}>
            <MailchimpSubscribe
                url={MAILCHIMP_URL+"?u="+MAILCHIMP_U+"&id="+MAILCHIMP_ID}
                render={({ subscribe, status, message}) => (
                    <CustomForm status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                     />
                )}

            />


        </DetailCol>
    )
}


export const CustomForm = ({status, message, onValidated}) => {


    const [email, setEmail] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        first &&
        last &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: first,
            MERGE2: last,
        });
    }
    return (

        <StyledFormLight style={{textAlign: `center`}} onSubmit={handleSubmit}>
            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: "<h6>"+message+"</h6>" }}
                />
            )}
            {status !== "success" && <>
                <h6>Join our mailing list.</h6>

                <a style={{width: `100%`, padding: `10px 0`, margin: `0`}}>We'll never sell your info.</a>

        <label style={{margin: `10px 0`}}>First Name: <input type="text" required value={first} onChange={(e) => setFirst(e.target.value)} /></label>
        <label style={{margin: `0 0 10px 0`}}>Last Name: <input type="text" required value={last} onChange={(e) => setLast(e.target.value)} /></label>

        <label style={{margin: `0 0 10px 0`}}>Email: <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>


        <input className="input__submit" style={{backgroundColor: Theme.colors.grey, height: `40px`, width: `150px`, border: `2px solid ${Theme.colors.grey}`, alignSelf: `center`}} type="submit" value="Submit" /></>}
    </StyledFormLight>
    )
}
