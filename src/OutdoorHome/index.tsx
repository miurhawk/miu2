import * as React from "react";
import { DetailRow, BookButton, FlexCol, HalfImageText, DetailCol, FullPhoto } from "../styles";
import Gallery from "../components/Gallery";


const lauraImg = "./img/img64.jpg";
const lukasImg = "./img/img52.JPG";
const evImg = "./img/img49.JPG";
const fenechImg = "./img/img48.JPG";
const suhailImg = "./img/img75.jpg";
const charlieImg = "./img/img.jpg";

const martinImg = "./img/img23.jpg";

const OutdoorHome = () => {

    return (
    <DetailCol>

        <DetailRow>
          <FlexCol>
          <h2>GO OUTSIDE <br /><span style={{color: `#23E5BF`}}>FEEL ALIVE</span></h2>
              <p>If you want to give climbing a try for the <a href="/first-time">first time</a>, our <a href="/climb-exp">Climb Experience</a> might be right for you.</p>
              <p>Once you're hooked we offer a <a href="/courses">series of courses</a> to help you learn the safety and communication protocols of climbing, so you can become a self-sufficient climber and belayer.</p>
              <p>When you become a climber, you join a global community of welcoming, adventurous and eclectic folks who will be eager to share a belay, and a beer, anywhere in the world.</p>

            <BookButton onClick={() => window.location.href="/first-time"}>Find out more</BookButton>
            <br />
            <br />
          </FlexCol>

          <Gallery>
            <HalfImageText right="true" gall="true" img={lauraImg}></HalfImageText>
            <HalfImageText right="true" gall="true" img={lukasImg} />
            <HalfImageText right="true" gall="true" img={evImg} style={{backgroundPosition: `left top`}} />
            <HalfImageText right="true" gall="true" img={fenechImg} ></HalfImageText>
            <HalfImageText right="true" gall="true" img={suhailImg} />
          </Gallery>

        </DetailRow>
        <a id="guiding"></a>
        <br />
        <br />

        <br />
        <br />
        <DetailRow>
        <HalfImageText img={charlieImg} />

          <FlexCol right={true}>
            <h2>hire a guide</h2>
              <p>Our highly experienced - and very enthusiastic - guides are ready to show you a great day on the rocks. </p>
              <p>Available on an hourly basis, guides can:</p>
              <ul>
                <li>take an experienced group of climbers to a new area</li>
                <li>act as a belay or multipitch partner</li>
                <li>show climbers from abroad to, and around, the crag</li>
                <li>take less experienced climbers to a toprope climbing area</li>

              </ul>
              <p>Guiding services are €35 per hour, per guide. <a href="mailto:info@gebla.mt">Contact us</a> with your party size and dates to book.</p>
            <br />
            <BookButton onClick={() => window.location.href='/form?product=Guide'}>Book Now</BookButton>
            <br />
            <br />
          </FlexCol>
        </DetailRow>


        <br />
        <a id="malta"></a>

        <FullPhoto img={martinImg} style={{minHeight: `50vh`, backgroundPosition: `100% 0%`}}/>
        <DetailRow>
        <FlexCol><h2><span style={{ color: `#23E5BF`}}>malta:</span> Discover<br />something special</h2></FlexCol>

        <FlexCol right={true}>
            <p>These beautiful Islands are blessed with easy access to stunning crags and hundreds of routes, often with incredible sea views.  </p>
            <p>Thanks to its small size, you never have to travel far to reach the crag and you’ll usually be just a quick jaunt from a beach for swimming afterwards.</p>
            <p>Maltese rock is limestone, with everything from epic overhanging lines in ancient caves to sketchy slabs. And most crags have a range of difficulties to suit climbers of all levels.</p>
            <p>Thanks to the friendliness of the people, a great restaurant and bar scene, an incredible cultural heritage and relentless clear blue sky, Malta is a wonderful place for your next climbing trip. </p>
            <p> And our <a href="/outdoor-home#guiding">guides</a> are here to save you time finding the crags and make sure you get the very most out of your trip.</p>
        </FlexCol>
        </DetailRow>


          </DetailCol>

  );
};

export default OutdoorHome;
