import { useAppSelector } from '@/hooks';
import { selectFollowed } from '@/store/tweets/tweets.selectors';
import TweetCard from '../TweetCard';
import styles from './styles.module.css';
import { ITweet } from '@/types/ITweet';

type Props = {
  tweets: ITweet[];
};

const TweetsList = ({ tweets }: Props) => {
  const followed = useAppSelector(selectFollowed);

  return (
    <>
      {tweets.length > 0 ? (
        <ul className={styles.list}>
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              <TweetCard info={tweet} isFollowed={followed.includes(tweet.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles['no-items']}>No tweets...</h2>
      )}
    </>
  );
};

export default TweetsList;
