import React from 'react'
//@ts-ignore
import styles from './styles.module.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import {User} from "../User";

export const Contact: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.navbar}>
                    <IconButton aria-label='dehaze__icon' className={styles.icon__dehaze}>
                        <DehazeIcon />
                    </IconButton>
                    <div className={styles.input__block}>
                        <SearchIcon />
                        <input type="text" className={styles.input} />
                    </div>
                </div>
                <div className={styles.user}>
                    <User
                        name={'Групповой чат'}
                        last_text={'Ку'}
                        time={'15:33'}
                        pin={true}
                        userId={1}
                    />
                </div>
            </div>
        </div>
    )
}