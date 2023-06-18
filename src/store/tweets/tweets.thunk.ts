import { getTweetsApi } from '@/api/tweets.api';
import { ITweet } from '@/types/ITweet';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTweets = createAsyncThunk<ITweet[], undefined, { rejectValue: string }>(
  'tweets/fetchTweets',
  async (_, { rejectWithValue }) => {
    try {
      return await getTweetsApi();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
