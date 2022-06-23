import React from "react";
import { Card, CardActions, CardContent, CardMedia , Button , Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style';
import poems from "../../../reducers/poems";
import {useDispatch} from 'react-redux'

import { deletePoem, likePoem } from "../../../actions/poems"

const Poem =({poem,setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return(

        <Card className={classes.card}>
           <CardMedia className={classes.media} image={poem.selectedFile} title={poem.title}/>
           <div className={classes.overlay}>
               <Typography variant="h6">{poem.poet}</Typography>
               <Typography variant="body2">{moment(poems.createdAt).fromNow()}</Typography>
           </div>
            <div className={classes.overlay2}>
                <Button style= {{color: 'white'}} size="small" 
                    onClick={()=> setCurrentId(poem._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
        

            </div>
            <div className={classes.details}>
                
                
                <Typography className={classes.title} variant="h5" gutterBottom>{poem.title}</Typography>
                

            </div>
            <CardContent>
             <Typography  variant="body2" color = "textPrimary" component="p">{poem.poem}</Typography>
             <Typography variant="body2" color = "textSecondary">{poem.tags.map((tag)=>`#${tag}`)}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary" onClick={()=> dispatch(likePoem(poem._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {poem.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=> dispatch(deletePoem(poem._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                    
                </Button>
            </CardActions>
            
            
        </Card>
    )
}
export default Poem;