import React from "react";
import styles from "./Logo.module.css";

type LogoProps = {
    width?: number;
    height?: number;
    linkUrl?: string;
}

export const Logo : React.FC<LogoProps> = ({
    width= 400,
    height= 800,
    linkUrl= '/'
}) => {
    const imgLogo = (
        <img width = {width} height= {height} src= "src/assets/artcreaprologo.svg" alt="Art Créa Pro logo" className={styles.logo} />
    );
    return linkUrl? (
        <a href={linkUrl} className={styles.link} >
            {imgLogo}
        </a>
    ): (
        imgLogo
    );
};