import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const initialState: any = {
  dataUser: [] as any,
  addShoping: [],
  login: '',
  add: [],
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.dataUser.push(action.payload);
    },
    addShoping: (state, action) => {
      state.addShoping.push(action.payload);
    },
    addFavorite: (state, action) => {
      state.add.push(action.payload);
    },
    login: (state, action) => {
      state.login = action.payload;
    },
    deleteitemShoping: (state, action) => {
      state.addShoping = [];
    },
    deleteFavorite: (state, action) => {
      const itemId = action.payload;
      state.add = state.add.filter((item: any) => item.name !== itemId);
    },
  },
});

export const {
  addData,
  login,
  addShoping,
  deleteitemShoping,
  addFavorite,
  deleteFavorite,
} = data.actions;
export const selectData = (state: any) => state.data;

export default data.reducer;
