import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { TabsContext } from "./Tabs";
import {DetailCol} from "../styles";

export interface IPanelProps {
  label: string
}

export const Panel: FunctionComponent<IPanelProps> = props => {
  const { activeTab } = useContext(TabsContext)
  return activeTab === props.label ? <DetailCol>{props.children}</DetailCol> : null
}
