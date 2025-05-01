import React from "react";
import styles from "./Input.module.css";

type InputProps = {
    placeholder: string;
    disable?: boolean;
    radiusSize? : 'none'| 'xs';
}

export const Input : React.FC<InputProps> = ({
    placeholder='Email',
    disable = false,
    radiusSize = 'none'
}) => {
    return(
        <input className= {`${styles[`border-${radiusSize}`]}`} placeholder={placeholder} disabled={disable}  />
    );
};