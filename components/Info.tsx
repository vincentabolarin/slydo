"use client";

import styles from "../styles/info.module.scss";

import {Apple, Android} from "@mui/icons-material";

const Info = () => {
    return (
        <>
            <div className={styles.container}>
                <p className="font-big">
                    You have a <span className="font-blue">Payment</span> from an Anonymous
                </p>

                <p className={`font-normal ${styles.details}`}>
                    All you have to do is enter your preferred account detail and the pass code you received to access the money. Dont have Slydo App yet? Download now!!!
                </p>

                <div className={styles.buttons}>
                    <button>Play Store <Android /></button>
                    <button>App Store <Apple /></button>
                </div>
            </div>
        </>
    );
}
 
export default Info;