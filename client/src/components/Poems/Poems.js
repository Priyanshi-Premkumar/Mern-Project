import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import {useSelector} from 'react-redux'
import Poem from "./Poem/Poem";
import useStyles from './style';

const Poems =({setCurrentId})=>{
    const poems = useSelector ((state)=>state.poems);
    const classes = useStyles();
    
    
    return(
        !poems.length ? <CircularProgress />: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {poems.map((poems)=>(
                    <Grid key={poems._id} item xs={12} sm={12} >
                        <Poem poem={poems} setCurrentId={setCurrentId}/>

                    </Grid>
                ))}

            </Grid>
        )
    );
}
export default Poems;