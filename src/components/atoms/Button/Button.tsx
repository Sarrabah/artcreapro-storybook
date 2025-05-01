import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  size?: 'sm' | 'md';
  disable?: boolean;
  onClick?: () => void;
  radiusSize? : 'none' | 'xs';
};

export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'md',
  disable = false,
  onClick,
  radiusSize = 'xs'
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-border-${radiusSize}`]}`}
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
