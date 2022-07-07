import React from 'react';
import { Main } from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//@ts-ignore
import styles from './App.module.css'
import {Contact} from "./component/Contact";
import {ChatRoom} from "./pages/ChatRoom";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
       <div className={styles.contact}>
           <Contact />
       </div>
      <div className={styles.content}>
          <Routes>
              <Route path={"/"} element={<Main />}/>
              <Route path={'/:roomId'} element={<ChatRoom />}/>
          </Routes>
      </div>
    </div>
  );
}

