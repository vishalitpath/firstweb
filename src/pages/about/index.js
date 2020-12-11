import React, { Component, StrictMode, Suspense, lazy, } from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';

import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import PopeverDemo from "../popever";
import AlertDialog from "../../components/materialDialog";
import CustomizedSnackBars from "../../components/snackbarMaterial";
import ChakraPinInput from "../../components/chakraPinInput";
// import FileUpload from "../fileUpload";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
class StrictModeExample extends Component {
    componentWillMount() {
        console.log("this method should not be used")
    }
    render() {
        return (
            <span>Strict Mode</span>
        )
    }
}
const FileUploadComponent = lazy(() => import('../fileUpload'));

class AboutUs extends React.Component {
    // const OtherComponent = React.lazy(() => import('./OtherComponent'));
    render() {
        return (
            <SideMenu content={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    AboutUs page
                        <StrictModeExample />
                    <Suspense fallback={<div>Loading..</div>}>
                        {/* for code-splitting */}
                        <FileUploadComponent />
                    </Suspense>
                    <ThreeDRotation />
                    <HomeIcon color="primary" />
                    <Icon className="fa fa-plus-circle" color="secondary" />
                    <PopeverDemo/>
                    <div>
                        <p>Material Dialog</p>
                        <AlertDialog/>
                    </div>
                    <div>
                        <p>Material snack-bar</p>
                        <CustomizedSnackBars/>
                    </div>
                    <div>
                        <p>Chakra Pin-Input</p>
                        <ChakraPinInput/>
                    </div>
                </div>}
            />
        )
    }
}

export default AboutUs;