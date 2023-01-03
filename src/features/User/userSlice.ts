import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiResponseInterface, ApiStatus, UserEntity } from '../../core/core';
import { fetchAllUsers, fetchSingleUser } from './userAPI';

export interface UserState {
  singleUser: ApiResponseInterface<UserEntity>;
  allUsers: ApiResponseInterface<UserEntity[]>;
}

const initialState: UserState = {
  singleUser: {},
  allUsers: {},
};

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  const response = await fetchAllUsers();
  return response;
});

export const getSingleUser = createAsyncThunk(
  'user/getSingleUser',
  async (id: number) => {
    try {
      const response = await fetchSingleUser(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.allUsers.status = ApiStatus.PENDING;
      })
      .addCase(getAllUsers.fulfilled, (state, action: any) => {
        state.allUsers.status = ApiStatus.FULFILLED;
        state.allUsers.data = action.payload.data;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.allUsers.status = ApiStatus.REJECTED;
      })
      .addCase(getSingleUser.pending, (state) => {
        state.singleUser.status = ApiStatus.PENDING;
      })
      .addCase(getSingleUser.fulfilled, (state, action: any) => {
        state.singleUser.status = ApiStatus.FULFILLED;
        state.singleUser.data = action.payload.data;
      })
      .addCase(getSingleUser.rejected, (state) => {
        state.singleUser.status = ApiStatus.REJECTED;
      });
  },
});

export default userSlice.reducer;
