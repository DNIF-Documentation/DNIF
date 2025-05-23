// File: DnifIntroBox.jsx ✅
import React from 'react';
import styles from './DnifUiCards.module.css';

const DnifIntroBox = () => (
  <div className={styles.introBox}>
    <h1 className={styles.introTitle}>DNIF UI Overview</h1>
    <p className={styles.introText}>
      {`The DNIF UI is designed for speed, clarity, and actionable insight. Whether you're a SOC analyst or an administrator, our interface simplifies security.`}
    </p>
  </div>
);

export default DnifIntroBox;
