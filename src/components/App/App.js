import React from 'react';
import List from '../List/List';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} {...listData} />
      </main>
    )
  }
}

export default App;
