import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    AlertDialogCloseButton,
    Radio,
    RadioGroup,
    Stack, Text,
    Progress,
    Switch
} from "@chakra-ui/react";

export default function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <div>
            <>
                <Button onClick={onOpen}>Discard</Button>
                <AlertDialog
                    motionPreset="slideInBottom"
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            Are you sure you want to discard all of your notes? 44 words will be
                            deleted.
                         </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                No
                             </Button>
                            <Button colorScheme="red" ml={3}>
                                Yes
                             </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
            <div>
                <Text>Radio button example</Text>
                <RadioGroup defaultValue="2" name="form-name">
                    <Stack spacing={5} direction="row">
                        <Radio colorScheme="red" value="1">
                            Radio
                         </Radio>
                        <Radio colorScheme="green" value="2">
                            Radio
                         </Radio>
                    </Stack>
                </RadioGroup>
            </div>
            <div>
                <Progress value={80} />
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <Text>Switch button</Text>
                <Stack direction="row">
                    <Switch colorScheme="teal" size="lg" />
                </Stack>
            </div>
        </div>
    )
}