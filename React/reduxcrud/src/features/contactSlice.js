import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const initialState={
       contacts_data:[]
    };

export const contactSlice =createSlice({
    name:'contact',
    initialState,
    reducers:{

    }
});


export const insert_contact=createAsyncThunk('insert_contact',async(api,formobj)=>{
    const res=await axios.post(`http://localhost:3000/contact`,formobj);
    console.log(res.data);
    return res.data;
});

export const delete_contact=createAsyncThunk('delete_contact',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/contact/${id}`);
    console.log(res.data);
    return res.data;
});

export const update_contact=createAsyncThunk('update_contact',async(id,formobj)=>{
    const res=await axios.patch(`http://localhost:3000/contact/${id}`,formobj);
    console.log(res.data);
    return res.data;
});


export const {  } = contactSlice.actions
export default contactSlice.reducer