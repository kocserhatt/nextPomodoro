"use client"

import PomodoroWrapper from "./components/pomodoroWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PomodoroWrapper />
    </main>
  );
}
