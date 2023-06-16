import styles from './styles.module.css';

type Props = {
  alt: string;
  src: string;
};

const UsertAvatar = ({ src, alt }: Props) => {
  return (
    <div className={styles['avatar-container']}>
      <img className={styles.avatar} src={src} alt={alt} />
    </div>
  );
};

export default UsertAvatar;
