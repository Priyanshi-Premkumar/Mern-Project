import { FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes';
export default(poems=[],action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...poems, action.payload];
        case UPDATE:
      
            return poems.map((poem)=>poem._id ===action.payload._id ? action.payload : poem);
        case DELETE:
            return poems.filter((poem) => poem._id!==action.payload)
        
    
        default:
            return poems;
    }
}