import React, { useState, useEffect } from 'react';
import { Spinner, useToast, Box, Input } from "@chakra-ui/core";

import { user, LIST } from '../../components/dataObject';
import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import Table from "../../components/CommonTable";

function DisplayDetails() {
    const [loading, setLoading] = useState(false);
    const [apiInforamation, setApiInformation] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const toast = useToast();

    useEffect(() => {
        randomUserName();
    }, []);

     function randomUserName() {
        debugger
        setLoading(true)
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(responseJson => {
                debugger
                setApiInformation(responseJson.results['0']);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                toast({
                    title: "An error occurred.",
                    description: "Unable to load details.",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                })
            })
    }

    function formatName(user) {
        return user.firstName + ' ' + user.lastName
    }
    const getNames = () => {
        var temp;
        var arr = []
        for (var item in apiInforamation.name) {
            arr.push(<span >{apiInforamation.name['' + item]}, </span>)
        }
        return arr
    }

    const submitTitle = () => {
        if (titleInput == "" || titleInput == undefined) {
            toast({
                title: `Empty title is not allow!`,
                status: "error",
                duration: 1500,
                isClosable: true,
            })
        }
        else {
            fetch('https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: titleInput })
                })
                .then(response => response.json())
                .then(responseJson => {
                    toast({
                        title: ` title ${responseJson.title} added.`,
                        description: "We've added this title for you.",
                        status: "success",
                        duration: 1500,
                        isClosable: true,
                    })
                })
                .catch(() => {
                    toast({
                        position: "bottom",
                        render: () => (
                            <Box m={3} color="white" p={3} bg="red.500">
                                An error occurred.
                            </Box>
                        ),
                        duration: 1000
                    })
                })
        }
    }
    const handleChange = (e) => {
        setTitleInput(e.target.value);
    }
    const loader = () => {
        return loading ? <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
        /> : null;
    };

    return (
        <SideMenu content={
            <div style={{ justifyContent: 'space-between' }}>
                {getNames()}
                {loader()}
                <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                    <Input width="50%" value={titleInput} placeholder="title" size="md" onChange={handleChange} />
                    <button style={{ width: 50, height: 30 }} onClick={submitTitle} >submit</button>
                </div>
                <div>
                    <>
                        hello, {formatName(user)}!
                    </>
                </div>
                <Table tableDetails={LIST} />
            </div>}
        />
    )
}

export default DisplayDetails;
