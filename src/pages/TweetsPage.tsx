import { Link, useLocation } from 'react-router-dom';
import { RoutePath } from '@/constants/routes';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchTweets } from '@/store/tweets/tweets.thunk';
import { selectFilter, selectFilteredTweets } from '@/store/tweets/tweets.selectors';
import { FilterStatus, FilterStatuses } from '@/constants';
import { changeTweetFilter, nextPage } from '@/store/tweets/tweets.slice';
import TweetsList from '@/components/card/TweetsList/TweetsList';

const TweetsPage = () => {
  const location = useLocation();
  const backPath = location?.state?.from ?? RoutePath.MAIN;
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const { list: tweets, page, totalPages } = useAppSelector(selectFilteredTweets);

  const loadMoreHandler = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <section>
      <Link to={backPath} style={{ marginRight: 'auto' }}>
        &larr; Go Back
      </Link>
      <select
        style={{ display: 'block', margin: '30px auto 0' }}
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
      <TweetsList tweets={tweets} />
      {page < totalPages && (
        <button type='button' style={{ display: 'block', margin: '30px auto 0' }} onClick={loadMoreHandler}>
          Load more
        </button>
      )}
    </section>
  );
};

export default TweetsPage;
