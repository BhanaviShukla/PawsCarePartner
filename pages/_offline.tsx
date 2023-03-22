import styles from '../styles/Home.module.css';
import { OneColumnLayout } from '@layout/one-column-layout';
import React from 'react';
import { Seo } from '@components/base/seo';

function Offline() {
  return (
    <OneColumnLayout mainClassName={styles.flexCentered}>
      <Seo title='Offline page' description='Offline page' />

      <p className={styles.description}>Offline fallback</p>
    </OneColumnLayout>
  );
}

export default Offline;
