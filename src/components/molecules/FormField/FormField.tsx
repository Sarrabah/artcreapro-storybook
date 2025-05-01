import React from 'react';
import { Input } from '../../atoms/Input/Input';
import styles from './FormField.module.css';

import email from '../../../icons/email.svg';
import password from '../../../icons/password.svg';

type IconType = 'mail' | 'password';

type FormFieldProps = {
  placeholder?: string;
  disabled?: boolean;
  radiusSize?: 'none' | 'xs';
  icon?: IconType;
};

const iconMap: Record<IconType, string> = {
    mail: email,
    password: password,
};

export const FormField: React.FC<FormFieldProps> = ({
  placeholder = '',
  disabled = false,
  radiusSize = 'xs',
  icon = 'mail',
}) => {
  return (
    <div className={styles.container}>
      <img src={iconMap[icon]} className={styles.icon} alt={`${icon} icon`} />
      <Input
        placeholder={placeholder}
        disable={disabled}
        radiusSize={radiusSize}
      />
    </div>
  );
};
