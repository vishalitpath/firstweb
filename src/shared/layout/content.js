import React from "react";
import { Box } from "@chakra-ui/core";

const Content = (props) => {

	const { children, SideMenu } = props;
	
	return (
		<div>
			{SideMenu}
			<Box pt="75px">
				{children}
			</Box>
		</div>
	);
};

export default Content;