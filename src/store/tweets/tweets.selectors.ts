import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectTweets = (state: RootState) => state.tweets.list;
export const selectFilter = (state: RootState) => state.tweets.filter;
export const selectFollowed = (state: RootState) => state.tweets.followed;

export const selectFilteredTweets = createSelector(
  [selectTweets, selectFilter, selectFollowed],
  (tweets, filter, followed) => {
    switch (filter) {
      case 'follow':
        return tweets.filter((tweet) => !followed.includes(tweet.id));
      case 'following':
        return tweets.filter((tweet) => followed.includes(tweet.id));
    }

    return tweets;
  }
);
