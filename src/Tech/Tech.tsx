import * as React from "react";

export const Tech = () => {
    return (
        <div>
            <h1>computing : {'{'} tech {'}'}</h1>
            <h3 id="projects">projects</h3>
            <p>below is a list of links to current and recent tech projects:
            <br />
            <ul>
                <li><a href="https://www.chalk-technologies.com">chalk technologies</a></li>
                <li><a href="https://www.nature-counts.org">nature counts foundation</a></li>
                <li><a href="https://www.carbon-delta.com/">carbon delta</a></li>
                <li><a href="https://www.ini.uzh.ch/en.html">institut für neuroinformatik</a></li>
            </ul>
            </p>
            <h3 id="consulting">consulting</h3>
            <p>I am available to collaborate on short- or long-term tech projects, please <a href="mailto:">contact me</a> for availability and rates. my strongest competencies reside in the following areas:
            <br />
            <ul>
                <li>server-side architectures and implementations</li>
                <li>golang, python, typescript, react, docker, kubernetes</li>
                <li>Ci/CD structure and process implementations</li>
                <li>devops and github + gitlab deployment piplines</li>
                <li>google cloud + aws implementations and automations</li>
            </ul>
            </p>
        </div>
    );
    // return (
    //     <DetailCol>
    //         <DetailRow>
    //             <FlexAColumnFill href="/tees">
    //                 <FlexRowFill style={{justifyContent: `center`}} img={shirtImg}>
    //                     <h3>tees</h3>
    //                 </FlexRowFill>
    //             </FlexAColumnFill>
    //             <FlexAColumnFill href="/blog">
    //                 <FlexRowFill right="true" img={outdoorImg} style={{backgroundPosition: `center`, justifyContent: `center`}}>
    //                     <h3>blog</h3>
    //                 </FlexRowFill>
    //             </FlexAColumnFill>
    //
    //         </DetailRow>
    //     </DetailCol>
    //
    // );
};

// export default Home;
