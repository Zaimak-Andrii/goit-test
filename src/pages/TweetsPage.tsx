import { Link, useLocation } from 'react-router-dom';
import UserCard from '@/components/card/UserCard';
import { RoutePath } from '@/constants/routes';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchTweets } from '@/store/tweets/tweets.thunk';
import { selectFilter, selectFilteredTweets, selectFollowed } from '@/store/tweets/tweets.selectors';
import { FilterStatus, FilterStatuses } from '@/constants';
import { changeTweetFilter } from '@/store/tweets/tweets.slice';

const TweetsPage = () => {
  const location = useLocation();
  const backPath = location?.state?.from ?? RoutePath.MAIN;
  const dispatch = useAppDispatch();
  const tweets = useAppSelector(selectFilteredTweets);
  const filter = useAppSelector(selectFilter);
  const followed = useAppSelector(selectFollowed);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      <Link to={backPath}>&larr; Go Back</Link>
      <select
        value={filter}
        onChange={(evt) => {
          dispatch(changeTweetFilter(evt.target.value as FilterStatus));
        }}
      >
        {FilterStatuses.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <UserCard info={tweet} isFollowed={followed.includes(tweet.id)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TweetsPage;
