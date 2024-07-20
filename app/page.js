"use client";


import styles from "./page.module.css";
import {PomodoroWrapper} from "../components/pomodoroWrapper.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <PomodoroWrapper/>
    </main>
  );
}
