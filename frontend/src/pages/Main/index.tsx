import React from 'react';
import styles from './styles.module.css';

interface MainProps {}

class Main extends React.PureComponent<MainProps> {
  public render(): React.ReactNode {
    return <div className={styles.Test}></div>;
  }
}

export default Main;
