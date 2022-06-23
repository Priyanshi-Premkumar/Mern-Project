import axios from "axios";

const url='http://localhost:5000/poem';
export const fetchPoems=()=>axios.get(url);
export const createPoem = (newPoem)=> axios.post(url,newPoem);
export const updatePoem =(id,updatedPoem) => axios.patch(`${url}/${id}`,updatedPoem);
export const deletePoem =(id) => axios.delete(`${url}/${id}`);
export const likePoem =(id) => axios.patch(`${url}/${id}/likePoem`);