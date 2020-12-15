import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./App.css";
import Home from "../pages/home";

function App() {
  return (
    <div>
      <Tabs align="center" defaultIndex={0}>
        <TabList>
          <Tab>
            Home
          </Tab>
          <Tab>
            Projects
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <div>Hello</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
