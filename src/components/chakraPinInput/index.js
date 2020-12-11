import React from 'react';
import {
    PinInput, PinInputField, HStack,
    Tabs, TabList, TabPanels, Tab, TabPanel
    , useColorMode, Button
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export default function ChakraPinInput() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <HStack>
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
            <div>
                <p>Chakra Tabs </p>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
                <Tabs>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <PhoneIcon />
        </div>

    )
}
