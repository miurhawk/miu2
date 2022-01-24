import * as React from "react";
import {BookButton, DetailCol, DetailRow, FullPhoto, InfoItems, OutlineDiv, PartialPhoto, Theme} from "../styles";
import { useState, useEffect } from "react";
import { Tabs } from "../components/Tabs";
import RouteBook from "./RouteBook";
import Memberships from "./Memberships";
import Feedback from "./Feedback";
import Playlists from "./Playlists";
import {SignUpButton} from "../components/SignUpButton";



export const FeaturesClimber = () => {

  const [color1, updateColor1] = useState(Theme.colors.light);
  const [color2, updateColor2] = useState("");
  const [color3, updateColor3] = useState("");
  const [color4, updateColor4] = useState("");
  const [img, setImg] = useState("");


  useEffect(() => {
    setTimeout(() => updateColor1(""), 300)
    setTimeout(() => updateColor2(Theme.colors.light), 300)
    setTimeout(() => updateColor2(""), 600)
    setTimeout(() => updateColor3(Theme.colors.light), 600)
    setTimeout(() => updateColor3(""), 900)
    setTimeout(() => updateColor4(Theme.colors.light), 900)
    setTimeout(() => updateColor4(""), 1200)
  }, []);


  return (
      <DetailRow>
<OutlineDiv>

  <Tabs>
        <Tabs.Panel label="">
          <FullPhoto style={{backgroundImage: `url(./img/img35.jpg)`}}>

              <SignUpButton />
              Save your faves
            {/*<img src={"/img/img35.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Get Tips">
          <FullPhoto style={{backgroundImage: `url(./img/climberonblue.jpg)`}} >
              <SignUpButton />
             Cheat code: BETA
            {/*<img src={"/img/img59.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Training">
          <FullPhoto  style={{backgroundImage: `url(./img/austrian.jpg)`}}>
              <SignUpButton />

              Climb harder
            {/*<img src={"/img/img80.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Feedback">
          <FullPhoto  style={{backgroundImage: `url(./img/climberdescending.jpg)`}}>
              <SignUpButton />

              Be heard
            {/*<img src={"/img/img48.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <Tabs.Panel label="Leaderboard">
          <FullPhoto  style={{backgroundImage: `url(./img/podium2.jpg)`}}>
              <SignUpButton />

              Friendly competition
            {/*<img src={"/img/img76.jpg"} />*/}
          </FullPhoto>
        </Tabs.Panel>
        <InfoItems>
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Get Tips" color={color1} />
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Training" color={color2} />
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Feedback" color={color3} />
          <Tabs.Tab darkenHover={false} hideLabel={false} img={""} label="Leaderboard" color={color4} />
        </InfoItems>
        <Tabs.Panel label="">
          {/*<RouteBook />*/}
        </Tabs.Panel>
        <Tabs.Panel label="Get Tips">
          <RouteBook />
        </Tabs.Panel>
        <Tabs.Panel label="Training">
          <Memberships />
        </Tabs.Panel>
        <Tabs.Panel label="Feedback">
          <Feedback />
        </Tabs.Panel>

        <Tabs.Panel label="Leaderboard">
          <Playlists />
        </Tabs.Panel>
      </Tabs>
  </OutlineDiv>
          <PartialPhoto left={false} style={{backgroundImage: `url(./img/Profile.png)`}}>

          </PartialPhoto>

      </DetailRow>
  );
};

