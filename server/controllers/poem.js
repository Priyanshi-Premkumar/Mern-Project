import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";
export const getPoem =async(req,res)=>{
    try{
        const postMessages =await PostMessage.find();
       
        res.status(200).json(postMessages);

    }catch(error){
        res.status(404).json({message:error.message});

    }

}

export const createPoem =async (req,res) =>{
    const poem = req.body;

    const newPoem = new PostMessage(poem);
    try{
        await newPoem.save();
        res.status(201).json(newPoem);

    }catch(error){
        res.status(409).json({message: error.message});

    }
}

export const updatePoem= async(req,res)=>{
    const {id: _id} = req.params;
    const poem = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Poem Available');
    
    
    const updatedPoem=await PostMessage.findByIdAndUpdate(_id,poem,{new:true});
    res.json(updatedPoem);


}

export const deletePoem = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Poem Available');

    await PostMessage.findByIdAndRemove(id);
    console.log('DELETE!');


    res.json({message: 'Post deleted sucessfully!'});
}

export const likePoem = async(req,res)=>{
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Poem Available');
    const poem = await PostMessage.findById(id);
    const updatedPoem = await PostMessage.findByIdAndUpdate(id,{likeCount: poem.likeCount + 1},{new: true})
    res.json(updatedPoem);
    
}