import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ITweet } from '@/types/ITweet';
import { fetchTweets } from './tweets.thunk';
import type { FilterStatus, RequestStatus } from '@/constants';

interface IInitialState {
  list: ITweet[];
  followed: string[];
  filter: FilterStatus;
  pagination: {
    page: number;
    limit: number;
  };
  status: RequestStatus;
  error: string | null;
}

const initialState: IInitialState = {
  list: [],
  followed: [],
  filter: 'all',
  pagination: {
    page: 1,
    limit: 3,
  },
  status: 'idle',
  error: null,
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    changeTweetFilter: (state, { payload }: { payload: FilterStatus }) => {
      state.filter = payload;
      state.pagination.page = 1;
    },
    addToFollowed: (state, { payload }: { payload: string }) => {
      state.followed.push(payload);
    },
    removeFromFollowed: (state, { payload }: { payload: string }) => {
      state.followed = state.followed.filter((id) => id !== payload);
    },
    nextPage: (state) => {
      state.pagination.page += 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchTweets.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.list = payload;
      })
      .addCase(fetchTweets.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload ?? 'Unknown error.';
      });
  },
});

export const { changeTweetFilter, addToFollowed, removeFromFollowed, nextPage } = tweetsSlice.actions;

const persistConfig = {
  key: 'tweets/followed',
  storage,
  whitelist: ['followed'],
};
export const tweetsReducer = tweetsSlice.reducer;
export const persistedTweets = persistReducer(persistConfig, tweetsReducer);
