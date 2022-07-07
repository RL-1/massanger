import React, {useId} from 'react'
//@ts-ignore
import styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import PushPinIcon from '@mui/icons-material/PushPin';
interface userType{
    name: string
    last_text: string
    time: string
    pin: boolean
    userId: number
}
export const User = (props:userType) => {
    const { name, last_text, time, pin, userId } = props
    return(
        <div className={styles.container}>
            <NavLink to={`/${userId}`} className={styles.content}>
                <div className={styles.logo}>
                    <div className={styles.logo__name}>
                        {name[0].toUpperCase()}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.nav}>
                        <div className={styles.name}>
                            {name}
                        </div>
                        <div className={styles.time}>
                            {time}
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.last__message}>
                            {last_text}
                        </div>
                        {pin && <PushPinIcon />}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}