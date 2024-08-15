import React from 'react';
import { Header } from '../../components';
import { Dashboard } from "../../components";
import { Footer } from '../../components';

import styles from './index.module.less';

export const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
