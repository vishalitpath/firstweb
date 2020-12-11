import React, { useState } from 'react';
import {
    Box, Stack, Text, Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from "@chakra-ui/react";

function FileUpload() {
    const [file, setFile] = useState("");
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const [placement, setPlacement] = React.useState("right");
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleUpload(event) {
        setFile(event.target.files[0]);
    }

    function sizeConverter(size) {

        let l = 0, n = parseInt(size, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }

    return (
        <Box display="flex" flexDirection="column">
            <input type="file" onChange={handleUpload} />
            <Stack spacing={3}>
                <Text fontSize="lg">File Name: {file.name}</Text>
                <Text fontSize="lg">File type: {file.type}</Text>
                <Text fontSize="lg">File size: {sizeConverter(file.size)}</Text>
                {file && <ImageThumb image={file} />}
            </Stack>
            <Box>
                <Button colorScheme="blue" onClick={onOpen}>
                    Open
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton w="45px" h="45px" rounded="50%" top="43px" right="20px" background="gray.100" />
                            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                            <DrawerBody>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </Box>
    )
}
const ImageThumb = ({ image }) => {
    return (
        <div style={{ justifyContent: 'center' }}>
            <img height="350" width="300" src={URL.createObjectURL(image)} alt={image.name} />
        </div>
    )
}
export default FileUpload;
