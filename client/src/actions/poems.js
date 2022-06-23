import { FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes';
import * as api from '../api';

//Action
export const getPoems = () => async (dispatch)=>{
    try{
        const {data} = await api.fetchPoems();
        dispatch({type: FETCH_ALL, payload:data});

    }catch(error){

        console.log(error.message);
    }

    
}
export const createPoem = (poem)=> async (dispatch) =>{
    try{
        const {data} = await api.createPoem(poem);
        dispatch ({type: CREATE,payload: data});  

    }
    catch(error){
        //console.log(error.message);
        console.log(error);

    }
}

export const updatePoem =(id,poem) =>async(dispatch)=>{
    try{
        const {data} = await api.updatePoem(id,poem);

        dispatch({type: UPDATE,payload:data});

    }catch(error){
        console.log(error);

    }
}

export const deletePoem = (id) => async(dispatch) =>{
    try{
        const response = await api.deletePoem(id);
        dispatch({type: DELETE, payload: id});

    }
    catch(error){
        console.log(error);

    }
}
export const likePoem = (id) =>async(dispatch) =>{
    try{

        const {data} = await api.likePoem(id);

        dispatch({type: UPDATE,payload:data});

    }
    catch(error)
    {
        console.log(error)

    }
}