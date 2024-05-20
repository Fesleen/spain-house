import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostContact = createAsyncThunk("Form/post", async (formData) => {
  return await axios.get('http://localhost:8000/contact', formData)
    .then(res => res.data);
});

const ContactSlice = createSlice({
  name: "Form",
  initialState: {
    postContact: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [], 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostContact.pending, (state) => {
        state.postContact.Loading = true;
        state.postContact.Error = false;
        state.postContact.Success = false;
      })
      .addCase(PostContact.fulfilled, (state, action) => {
        state.postContact.Loading = false;
        state.postContact.Success = true;
        state.postContact.Data = action.payload;
        state.postContact.Error = false;
      })
      .addCase(PostContact.rejected, (state, action) => {
        state.postContact.Loading = false;
        state.postContact.Error = true;
        state.postContact.Success = false;
      });
  },
});

export default ContactSlice.reducer;
