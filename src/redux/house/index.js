import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const HouseGet = createAsyncThunk("house/get", async () => {
    const response = await axios.get('http://localhost:8000/House');
    return response.data;
});

const houseSlice = createSlice({
    name: "house",
    initialState: {
        houseGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(HouseGet.pending, (state) => {
                state.houseGet.loading = true;
            })
            .addCase(HouseGet.fulfilled, (state, action) => {
                state.houseGet.loading = false;
                state.houseGet.success = true;
                state.houseGet.data = action.payload;
                state.houseGet.error = false;
            })
            .addCase(HouseGet.rejected, (state) => {
                state.houseGet.loading = false;
                state.houseGet.error = true;
                state.houseGet.success = false;
            });
    },
});

export default houseSlice.reducer;
