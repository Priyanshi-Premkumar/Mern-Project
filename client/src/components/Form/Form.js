import React, {useState, useEffect} from "react";
import {TextField,Button,Typography,Paper, } from '@material-ui/core'
import useStyles from './style';
import { useSelector } from "react-redux";
//@ts-ignore
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPoem, updatePoem } from "../../actions/poems";


const Form =({currentId,setCurrentId})=>{
    const [poemData,setPoemData] = useState({
        poet: '',title: '',poem: '',tags: '',selectedFile:''

    })
const poem = useSelector((state)=>currentId ? state.poems.find((p)=>p._id===currentId): null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(poem) setPoemData(poem);

    },[poem])



    const handleSubmit = (e) =>{
        e.preventDefault();
        if(currentId){

            dispatch(updatePoem(currentId,poemData));
            
        }else{
            dispatch(createPoem(poemData));
            

        }
        clear();
        

    }
    const clear = () =>{
        setCurrentId(null);
        setPoemData({poet: '',title: '',poem: '',tags: '',selectedFile:''});

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Edit Poem': 'Create Poem'}

                </Typography>
                <TextField 
                name="poet" 
                variant="outlined" 
                label="Poet" 
                fullWidth
                value={poemData.poet}
                onChange={(e)=>setPoemData({...poemData, poet: e.target.value})}/>

                <TextField 
                name="title" 
                variant="outlined"
                label="Title" 
                fullWidth
                value={poemData.title}
                onChange={(e)=>setPoemData({...poemData, title: e.target.value})}/>

                <TextField 
                name="poem" 
                variant="outlined" 
                label="Poem"
                multiline
                rows={6}
                maxRows={14} 
                fullWidth
                value={poemData.poem}
                onChange={(e)=>setPoemData({...poemData, poem: e.target.value})}/>

                <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth
                value={poemData.tags}
                onChange={(e)=>setPoemData({...poemData, tags: e.target.value.split(',')})}/>

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64})=>setPoemData({...poemData,selectedFile: base64})}
                    />
                
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>      
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>  
            </form>

        </Paper>
    );
}
export default Form;