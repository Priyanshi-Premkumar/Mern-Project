import React,{useEffect,useState} from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {getPoems} from './actions/poems'
import Poems from "./components/Poems/Poems";
import Form from "./components/Form/Form";
import useStyles from './styles';
import {useDispatch} from 'react-redux';
const App =() =>{
    const [currentId, setCurrentId]=useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPoems());

    },[currentId,dispatch]);


    return (
        <Container maxidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Shelf Of Poems

                </Typography>
                <img className={classes.image} src="https://www.pngitem.com/pimgs/m/226-2263563_hd-poem-png-poetry-png-transparent-png.png" alt="poemss" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container direction="column-reverse" justify= "space-between" alignItems="strech" spacing={3}>
                    <Grid item xs={12} sm={7}>
                            <Poems setCurrentId={setCurrentId}/>
                        </Grid>
                    <Grid item xs={12} sm={7}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;