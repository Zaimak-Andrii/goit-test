import { ITweet } from '@/types/ITweet';
import styles from './styles.module.css';
import TweetText from './TweetText';
import UsertAvatar from './UserAvatar';
import { useAppDispatch } from '@/hooks';
import { addToFollowed, removeFromFollowed } from '@/store/tweets/tweets.slice';
import { Button } from '../common/buttons';

type Props = {
  info: ITweet;
  isFollowed: boolean;
};

const TweetCard = ({ info, isFollowed = false }: Props) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const fn = isFollowed ? removeFromFollowed : addToFollowed;

    dispatch(fn(info.id));
  };

  return (
    <article className={styles.container}>
      <UsertAvatar src={info.avatar} alt={info.user} />
      <div className={styles.description}>
        <TweetText count={info.tweets} text='tweets' />
        <TweetText count={info.followers + (isFollowed ? 1 : 0)} text='followers' />
      </div>
      <Button onClick={clickHandler} isActive={isFollowed}>
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    </article>
  );
};

export default TweetCard;
