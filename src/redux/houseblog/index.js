import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import axios from "axios"


export const AksesuarsGet = createAsyncThunk(
  "aksesuar/get", async () => {
      return await axios.get('http://localhost:8000/data')
          .then(res => res.data)
  })

const AksesuarsSlice = createSlice({
  name: "aksesuars",
  initialState: {
      aksesuarsGet: {
          loading: false,
          data: [],
          error: false,
          success: false,
      }
  },

  extraReducers: (builder) => {
      builder
          .addCase(AksesuarsGet.pending, (state, action) => {
              state.aksesuarsGet.loading = true
          })
          .addCase(AksesuarsGet.fulfilled, (state, action) => {
              state.aksesuarsGet.loading = false;
              state.aksesuarsGet.success = true;
              state.aksesuarsGet.data = action.payload;
              state.aksesuarsGet.error = false;
          })
          .addCase(AksesuarsGet.rejected, (state, action) => {
              state.aksesuarsGet.loading = false;
              state.aksesuarsGet.error = true;
              state.aksesuarsGet.success = false;
          })
  }
})

export const {} = AksesuarsSlice.actions;
export default AksesuarsSlice.reducer;
