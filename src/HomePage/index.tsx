import * as React from "react";
import {
    Headline,
    DetailCol,
    Theme,
    Divider,
    PricingDiv,
    DetailRow,
    GroupRow,
    AppStoreButton, FullPhoto
} from "../styles";
import {FeaturesClimber} from "../FeaturesClimber";
import {FeaturesGym} from "../FeaturesGym";


const HomePage = () => {
  return (
      <>
    <DetailCol>
        <a id={"top"} />
      <Headline>send more. <span style={{color: Theme.colors.darkgrey}}>get BETA.</span></Headline>

        <div className={"text"}>
        <h6><span style={{fontWeight: `bold`}}>Welcome to BETA.</span></h6>
        <p>BETA is a revolutionary new way for climbers and gyms to interact.</p>
            <p>Climbers can track their climbs, store their memberships, get and share tips on their projects, and give feedback to routesetters, while gyms get stats on their members and climbs to better identify gaps in their service.</p>
        <p>Find out more about our features below or download our app from the App Store or Google Play now.</p>
            <br />
            <br />
            <GroupRow>
                <AppStoreButton onClick={()=>window.open("https://play.google.com/store/apps/details?id=beta.chalk_technologies.com&hl=en&gl=US")} style={{backgroundPosition: `50% 50%`, backgroundSize: `115%`, backgroundImage: "url(./img/google-play-badge.png)"}} />
                <AppStoreButton onClick={()=>window.open("https://apps.apple.com/us/app/beta-climbing/id1568699364")} style={{backgroundImage: "url(./img/apple-badge.svg)"}} />
            </GroupRow>
            <br />
            <br />


        </div>

        <FullPhoto style={{height: `500px`, backgroundImage: `url(./img/Overhang1.png)`}} />
        <br />
        <br />
        {/*<Divider />*/}
        <br />
        <br />

        <br />
        <br />
        <br />
    </DetailCol>
          <DetailCol style={{backgroundColor: Theme.colors.darkgrey}}>
      <a id={"forClimbers"} />

      <Headline>BETA for climbers.</Headline>
        <div className={"text"}>
          BETA Climbing is free to use and available today in your favorite app store. Stay tuned for BETA Pro for climbers who are more focused on training and technique.
        </div>
        <FeaturesClimber />
        <br />
        <br />
        <FullPhoto style={{height: `500px`, backgroundImage: `url(./img/Slab.png)`}} />

    </DetailCol>
      <DetailCol>

          <br />
          <br />
          {/*<Divider />*/}

          <br />
          <br />
          <br />
          <br />
          <br />
          <a id={"forGyms"} />
        <Headline>BETA for gyms.</Headline>
      <div className={"text"}>
          BETA replaces your point of sale, membership management, event booking, routesetting app, waiver system, and more. It consolidates and connects all of your gym software to give you one cohesive overview of your gym's activity, revenues, and members. BETA <span style={{fontWeight: `bold`}}>finally</span> brings climbing gym software into the modern era with QR code check-in, universal user profiles, and AI-fueled insights into your clientele.
      </div>
        <FeaturesGym />

        <h6 style={{alignSelf: `center`}}>Pricing</h6>

        <DetailRow>

            <PricingDiv onClick={()=>window.location.replace("/#top")} style={{marginLeft: `auto`}}>
                <h4>BETA Basic</h4>
                <h3>FREE</h3>
                now and forever
                <br />
                <br />
                <ul>
                    <li>add and manage routes</li>
                    <li>allow climbers to mark sends and attempts</li>
                    <li>maintain a gym leaderboard</li>
                    <li>start now by downloading the app</li>
                </ul>

            </PricingDiv>
            <PricingDiv onClick={()=>window.location.replace("/form")} >
                <h4>BETA Plus</h4>
                <h3>€1 / 🏷️</h3>
                per month
                <br />
                <br />
                <ul>
                    <li>get activity and feedback insights</li>
                    <li>control who is able to manage routes</li>
                    <li>detailed grade and style breakdowns</li>
                    <li>add grading circuits and areas to your climbs</li>
                </ul>

            </PricingDiv>
            <PricingDiv onClick={()=>window.location.replace("/form")} style={{marginRight: `auto`}}>
                <h4>BETA Pro</h4>
                <h3>0.5%</h3>
                of total sales volume
                <br />
                <br />
                <ul>
                    <li>advanced business insights</li>
                    <li>membership management and waiver signing</li>
                    <li>point of sale and invoicing</li>
                    <li>integrate with Stripe and Sumup credit card readers</li>
                    <li>event creation and booking</li>
                </ul>

            </PricingDiv>
        </DetailRow>

      <br />
        <br />
        <FullPhoto style={{height: `500px`, backgroundImage: `url(./img/Dyno1.png)`}} />

        <br />
        <br />

        {/*<Divider />*/}
        <br />
        <br />
        <br />
        <br />
        <br />

        </DetailCol>
</>
  );
};

export default HomePage;
