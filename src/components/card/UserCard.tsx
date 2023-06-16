import { IUserCard } from '@/types/IUserCard';
import styles from './styles.module.css';
import UserCardText from './UserCardText';
import UsertAvatar from './UsertAvatar';
import { useAppDispatch } from '@/hooks';
import { addToFollowed, removeFromFollowed } from '@/store/tweets/tweets.slice';

type Props = {
  info: IUserCard;
  isFollowed: boolean;
};

const UserCard = ({ info, isFollowed = false }: Props) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const fn = isFollowed ? removeFromFollowed : addToFollowed;

    dispatch(fn(info.id));
  };

  return (
    <article className={styles.container}>
      <UsertAvatar src={info.avatar} alt={info.user} />
      <div className={styles.description}>
        <UserCardText count={info.tweets} text='tweets' />
        <UserCardText count={info.followers + (isFollowed ? 1 : 0)} text='followers' />
      </div>
      <button
        className={[styles.button, styles[`button--${isFollowed ? 'active' : 'normal'}`]].join(' ')}
        type='button'
        onClick={clickHandler}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
    </article>
  );
};

export default UserCard;
