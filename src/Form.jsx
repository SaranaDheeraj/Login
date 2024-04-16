import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import FormTab from "./FormTab";

const Form = () => {
  return (
    <Box width="100%">
      <Tabs variant="unstyled">
        <TabList display="flex" justifyContent="center" width="100%">
          <Box width="60%" display="flex" p={2} bg="gray.100" borderRadius="sm">
            <Tab
              width="50%"
              _selected={{ color: "white", bg: "blue.600" }}
              bgColor="white"
              borderRadius="md"
              mr={1}
            >
              Admin
            </Tab>
            <Tab
              width="50%"
              _selected={{ color: "white", bg: "blue.600" }}
              bgColor="white"
              borderRadius="md"
            >
              Agent
            </Tab>
          </Box>
        </TabList>
        <TabPanels display="flex" justifyContent="center">
          <TabPanel p={0} width="60%">
            <FormTab />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Form;
