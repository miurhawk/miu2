import * as React from "react";
import {FunctionComponent, useState, createContext, ReactChildren, useEffect} from "react";
import { Panel, IPanelProps } from "./Panel";
import { Tab, ITabProps } from "./Tab";


interface ITabsComposition {
  Tab: FunctionComponent<ITabProps>;
  Panel: FunctionComponent<IPanelProps>;
}

interface ITabsContext {
  activeTab: string
  setActiveTab: (label: string) => void
}

export const TabsContext = createContext<ITabsContext | undefined>(
  undefined
)

const Tabs: FunctionComponent  & ITabsComposition = (props: {children: ReactChildren}) => {

  const [activeTab, setActiveTab] = useState("");
  //
  // useEffect(()=>{
  //
  //   let queryString = window.location.href.split("##")[1];
  //
  //   if (!queryString) {
  //     queryString = "";
  //   }
  //   var re = /%20/gi;
  //   queryString = queryString.replace(re, " ");
  //   setActiveTab(queryString);
  // })

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab}}>
        {props.children}
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab;
Tabs.Panel = Panel;
export { Tabs };
