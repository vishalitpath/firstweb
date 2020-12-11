import React from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button
} from "@chakra-ui/react";

function PopeverDemo() {
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <Button>Trigger</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default PopeverDemo;
