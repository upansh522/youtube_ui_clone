import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'Home',
  initialState: {
    ThumbnaUrl: {},
    TrendingUrl: {},
    VideoUrl:{},
  },
  reducers: {
    getApiConfiguration: (state, action)=>{
        state.ThumbnaUrl =action.payload;
    },
    getTrending: (state, action)=>{
        state.TrendingUrl= action.payload;
    },
    getVideo: (state,action)=>{
        state.VideoUrl= action.payload
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getTrending,getVideo} = HomeSlice.actions

export default HomeSlice.reducer