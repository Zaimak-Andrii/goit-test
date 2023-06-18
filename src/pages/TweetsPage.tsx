import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchTweets } from '@/store/tweets/tweets.thunk';
import { selectFilter, selectFilteredTweets, selectIsLoading } from '@/store/tweets/tweets.selectors';
import { FilterStatus, FilterStatuses } from '@/constants';
import { changeTweetFilter, nextPage } from '@/store/tweets/tweets.slice';
import TweetsList from '@/components/card/TweetsList';
import { Button } from '@/components/common/buttons';
import Loader from '@/components/common/Loader';
import { RoutePath } from '@/constants/routes';

const TweetsPage = () => {
  const location = useLocation();
  const backPath = location?.state?.from ?? RoutePath.MAIN;
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const isLoading = useAppSelector(selectIsLoading);
  const { list: tweets, page, totalPages } = useAppSelector(selectFilteredTweets);

  const loadMoreHandler = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <section>
      <Link to={backPath}>&larr; Go Back</Link>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
            <Button onClick={loadMoreHandler} isActive={true}>
              Load more
            </Button>
          )}
        </>
      )}
    </section>
  );
};

export default TweetsPage;
