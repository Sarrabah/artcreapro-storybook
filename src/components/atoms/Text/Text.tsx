import React from "react";
import styles from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "lg";
};

export const Text: React.FC<TextProps> = ({ children, size= "sm" }) => {
  return <p className={styles[size]}>{children}</p>;
};
