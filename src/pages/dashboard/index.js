import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react";

import LoginControl from "../loginControl";
import UsersControl from "../loginControl/userControl";
import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import BasicTable from "../tableDemo";
import "./style.css";

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const posts = [
        { id: 1, title: 'installation', content: 'we can install react from npm' },
        { id: 2, title: 'run project', content: 'we can run react project using npm start' }
    ];
    const content = posts.map((post) =>
        post.id === 1 ?
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </div> : null
    )
    return (
        <SideMenu content={
            <div>
                <h2>Dashboard</h2>
                {/* <LoginControl /> */}
                <div>
                    <UsersControl />
                </div>
                <div class="clock-div">
                    <text>Clock example manage by react life-cycle </text>  <Link to="/clock">clock</Link>
                </div>
                <div>
                    {/* {content} */}
                    <>
                        <Button onClick={onOpen}>Open Modal</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    {/* <Lorem count={2} /> */}
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                                        Close
                                </Button>
                                    <Button variant="ghost">Secondary Action</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </div>
                <BasicTable/>
            </div>}
        />
    )
}

export default Dashboard;