import * as React from "react";
import {DetailCol, FullPhoto, InfoItems, OutlineDiv, DetailRow, PartialPhoto, BookButton} from "../styles";

const constructionImg = "./img/gato2.jpg";
import {Tabs} from "../components/Tabs";
import Routesettings from "./Routesettings";
import CoursesDetail from "./Courses";
import PricesDetail from "./Prices";
import EventsDetail from "./Events";
import {SignUpButton} from "../components/SignUpButton";




export const FeaturesGym = () => {

  return (
      <DetailRow>
        <PartialPhoto left={true} style={{backgroundImage: `url(./img/betaWeb.png)`}}>

        </PartialPhoto>
    <OutlineDiv style={{textAlign: `right`}}>



      <Tabs>
        <Tabs.Panel label="">
          <FullPhoto style={{backgroundImage: `url(./img/austrianlady.jpg)`}}>
            <SignUpButton />
            Be smart
            {/*<img src={"/img/img35.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Insights">
          <FullPhoto style={{backgroundImage: `url(./img/rope.jpg)`}} >
            <SignUpButton />

            Set with style
            {/*<img src={"/img/img59.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Engagement">
          <FullPhoto  style={{backgroundImage: `url(./img/toprope.jpg)`}}>
            <SignUpButton />
            Cultivate psyche
            {/*<img src={"/img/img80.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="One System">
          <FullPhoto  style={{backgroundImage: `url(./img/taptags.jpg)`}}>

            <SignUpButton />

            Get it together
            {/*<img src={"/img/img48.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Know Your Customer">
          <FullPhoto  style={{backgroundImage: `url(./img/wallholds.jpg)`}}>
            <SignUpButton />
            Knowledge is Power
          </FullPhoto>
        </Tabs.Panel>

        <InfoItems>
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Insights" color={""}/>
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Engagement" color={""} />
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="One System" color={""} />
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Know Your Customer" color={""} />
        </InfoItems>
        <Tabs.Panel label="">

        </Tabs.Panel>
          <Tabs.Panel label="Insights">
            <Routesettings />
          </Tabs.Panel>
          <Tabs.Panel label="Engagement">
            <CoursesDetail />
          </Tabs.Panel>
          <Tabs.Panel label="One System">
            <PricesDetail />
          </Tabs.Panel>
          <Tabs.Panel label="Know Your Customer">
            <EventsDetail />
          </Tabs.Panel>
      </Tabs>
    </OutlineDiv>
      </DetailRow>
  );
};

//
// const IndoorHome = () => {
//   // const BoulderingDetail =
//   let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
//   // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
//   // props.setTitle("Indoor");
//   // const Details = [BoulderingDetail, CoachingDetail];
//   return (
//     <div  className={"col"}>
//     <FullPhoto img={constructionImg} style={{backgroundPosition: `0 30%`}}><h1>coming soon</h1></FullPhoto>
//
//       <a><p>We're still gearing up.</p>
//  <p>Keep an eye out for updates and exciting news. </p>
// <p>Follow us:</p></a>
//
//     </div>
//   );
// };
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

