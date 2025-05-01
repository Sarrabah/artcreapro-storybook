import React from "react";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import styles from "./LogInForm.module.css";
import { FormField } from "../../molecules/FormField/FormField";

type LogInFormProps = {
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  buttonLabel?: string;
};
export const LogInForm: React.FC<LogInFormProps> = (
  {
    emailPlaceholder = 'Email',
    passwordPlaceholder = 'Password',
    buttonLabel = 'Login',
  }
) => {
  
  return (
    <div className={styles.container}>
      <FormField placeholder={emailPlaceholder} icon="mail" />
      <FormField placeholder={passwordPlaceholder} icon="password" />
      <Button label={buttonLabel} />

      <div className={styles.links}>
        <Text size="lg">New here ? <a href="/">Sign Up</a></Text>
        <Text size="sm"><a href="/description">Return to description page</a></Text>
      </div>
    </div>
  );
};
