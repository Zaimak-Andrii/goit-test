import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

export const Button = ({ children, onClick, isActive = false }: Props) => {
  return (
    <button
      className={[styles.button, styles[`button--${isActive ? 'active' : 'normal'}`]].join(' ')}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
