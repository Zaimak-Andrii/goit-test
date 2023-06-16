import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  count: number;
  text: ReactNode;
};

const UserCardText = ({ count, text }: Props) => {
  return <p className={styles.text}>{`${count.toLocaleString()} ${text}`}</p>;
};

export default UserCardText;
