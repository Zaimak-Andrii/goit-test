import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './styles.module.css';

interface Props extends LinkProps {
  children: ReactNode;
  isActive?: boolean;
}

export const LinkButton = (props: Props) => {
  const { children, isActive = false, ...otherProps } = props;
  return (
    <Link className={[styles.button, styles[`button--${isActive ? 'active' : 'normal'}`]].join(' ')} {...otherProps}>
      {children}
    </Link>
  );
};
