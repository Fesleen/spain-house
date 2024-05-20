import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const InstaGet = createAsyncThunk(
    "insta/get", async () => {
        return await axios.get('http://localhost:8000/InstaBlog')
            .then(res => res.data)
    })
  
  const InstaSlice = createSlice({
    name: "insta",
    initialState: {
        instaGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(InstaGet.pending, (state, action) => {
                state.instaGet.loading = true
            })
            .addCase(InstaGet.fulfilled, (state, action) => {
                state.instaGet.loading = false;
                state.instaGet.success = true;
                state.instaGet.data = action.payload;
                state.instaGet.error = false;
            })
            .addCase(InstaGet.rejected, (state, action) => {
                state.instaGet.loading = false;
                state.instaGet.error = true;
                state.instaGet.success = false;
            })
    }
  })
  
  export const {} = InstaSlice.actions;
  export default InstaSlice.reducer;
  