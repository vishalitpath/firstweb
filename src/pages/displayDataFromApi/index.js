import React, { useState, useEffect } from 'react';
import { Spinner, useToast, Box, Input, Button } from "@chakra-ui/react";

import { user, LIST } from '../../components/dataObject';
import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import Table from "../../components/CommonTable";
import ApiService from "../../services/api-service";
import TransitionExample from "../../components/chakraAlertDialog";
import TransferList from "../../components/transferListMaterial";
import "./style.css";

function DisplayDetails() {
    const [loading, setLoading] = useState(false);
    const [apiInformation, setApiInformation] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [tableTitle, setTableTitle] = useState("");
    const [tableContent, setTableContent] = useState("");
    const [tableDetails, setTableDetails] = useState([{ title: 'npm', content: 'install' }]);
    const toast = useToast();

    useEffect(() => {
        // randomUserName();
        console.log("setLocalTableDetails", setLocalTableDetails);
    }, []);

    function randomUserName() {
        setLoading(true)
        ApiService.randomUserName()
            .then(response => {
                setApiInformation(response.data.results['0']);
                setLoading(false);
            })
            .catch((err) => {
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
        for (var item in apiInformation.name) {
            arr.push(<span >{apiInformation.name['' + item]}, </span>)
        }
        return arr
    }

    const submitTitle = () => {
        if (titleInput === "" || titleInput === undefined) {
            toast({
                title: `Empty title is not allow!`,
                status: "error",
                duration: 1500,
                isClosable: true,
            })
        }
        else {
            ApiService.submitTitle(titleInput)
                .then(response => {
                    toast({
                        title: ` title ${response.data.title} added.`,
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
    const onAddTableData = () => {
        if (tableTitle === "" || tableTitle === undefined || tableContent === "") {
            window.alert("Please fill title and content");
        }
        else {
            var setLocalTable = [...tableDetails, { title: tableTitle, content: tableContent }];
            setTableDetails([...tableDetails, { title: tableTitle, content: tableContent }]);
            localStorage.setItem("localTableDetails", JSON.stringify(setLocalTable));
        }
    }
    const setLocalTableDetails = JSON.parse(localStorage.getItem("localTableDetails"));
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
                {/* Names from the Api : {getNames()} */}
                {loader()}
                <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', padding: 11 }}>
                    <p>You can post title...</p>
                    <Input width="50%" value={titleInput} placeholder="title" size="md" onChange={handleChange} />
                    <Button colorScheme="teal" onClick={submitTitle}>submit</Button>
                </div>
                <div>
                    hello, {formatName(user)}!
                </div>
                <div class="table-div">
                    <text>Custom table for dynamic details</text>
                    <Table tableDetails={setLocalTableDetails} />
                </div>
                <div style={{ marginTop: 20 }}>
                    <TransitionExample />
                </div>
                <div style={{ marginTop: 20 }}>
                    <p>Material Transfer-List</p>
                    <TransferList />
                </div>
                <div>
                    <p>You can add data in the table</p>
                    <p>title</p>
                    <input style={{ borderColor: 'black', borderWidth: 2 }} type="text" value={tableTitle} onChange={(e) => { setTableTitle(e.target.value) }} />
                    <p>{tableTitle}</p>
                    <p>content</p>
                    <input type="text" style={{ borderColor: 'black', borderWidth: 2 }} value={tableContent} onChange={(e) => { setTableContent(e.target.value) }} />
                    <button onClick={onAddTableData}>submit</button>
                </div>
            </div>}
        />
    )
}

export default DisplayDetails;
