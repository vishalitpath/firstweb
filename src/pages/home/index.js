import React from 'react';
import {
    Button,
    Box,
    Container,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SideMenu from "../../shared/layout/sidemenu/sidemenu";
import SimpleBackdrop from "../../components/backDropMaterial";
import ClickAway from "../../components/clickAwayListenerMaterial";
import CrudOperations from "../crudOperations";
import "./style.css";
import Counters from "../../components/counter/counters";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Homepage = () => {
    const [state, setState] = React.useState({
        isChecked: true,
    });

    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <SideMenu content={
            <div>
                <h4>Home page</h4>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: 5 }}>
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    {/* <Button variant="contained" color="primary">Login</Button> */}
                    <Link to="/login">Login</Link>
                </div>
                <Box color="button.primary" padding={1}>
                    <Button variant="contained" color="primary">Material-ui</Button>
                </Box>
                <Container maxWidth="xl">
                    <Box>
                        A
                    </Box>
                    <Box>
                        B
                    </Box>
                    <Box>
                        C
                    </Box>
                </Container>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                    </Grid>
                </div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.isChecked}
                            onChange={handleChange}
                            name="isChecked"
                            color="primary"
                        />
                    }
                    label="Primary"
                />
                <div>
                    <SimpleBackdrop/>
                </div>
                <div>
                    <p>click away listener</p>
                    <ClickAway/>
                </div>
                <div>
                    <CrudOperations/>
                </div>
                <div>
                    <Counters/>
                </div>
            </div>
        } />
    )
}

export default Homepage;