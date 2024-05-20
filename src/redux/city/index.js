import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const CitysGet = createAsyncThunk(
    "citys/get", async () => {
        return await axios.get('http://localhost:8000/City')
            .then(res => res.data)
    })
  
  const CitysSlice = createSlice({
    name: "citys",
    initialState: {
        citysGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(CitysGet.pending, (state, action) => {
                state.citysGet.loading = true
            })
            .addCase(CitysGet.fulfilled, (state, action) => {
                state.citysGet.loading = false;
                state.citysGet.success = true;
                state.citysGet.data = action.payload;
                state.citysGet.error = false;
            })
            .addCase(CitysGet.rejected, (state, action) => {
                state.citysGet.loading = false;
                state.citysGet.error = true;
                state.citysGet.success = false;
            })
    }
  })
  
  export const {} = CitysSlice.actions;
  export default CitysSlice.reducer;
  