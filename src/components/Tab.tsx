import * as React from "react";
import {FunctionComponent, ReactChildren, useContext} from "react";
import { InfoItem } from "../styles";
import { TabsContext } from "./Tabs";
import {useRouter} from "next/router";


export interface ITabProps {
  label: string;
  color?: string;
  darkenHover?: boolean;
  hideLabel?: boolean;
  img?: string;
  style?: {[key: string]: string};
}

export const Tab: FunctionComponent<ITabProps> = (props: {style: {[key: string]: string}, label: string, hideLabel: boolean, img: string, darkenHover: boolean, color: string, children: ReactChildren}) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  let isActive = activeTab === props.label;
  const router = useRouter();

  function setTab(prop) {
    setActiveTab(prop);

    // router.push("##"+prop, undefined, { shallow: true });
  }
  return (
    <InfoItem img={props.img} style={props.style} isActive={isActive} darkenHover={props.darkenHover} color={props.color} onClick={() => setTab(props.label)}>
      <a>{props.hideLabel ? "" : props.label}</a>
    </InfoItem>
  )
}
