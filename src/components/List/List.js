import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column className={styles.title} title={'Praca'}/>
          <Column className={styles.title} title={'Rodzina'}/>
          <Column className={styles.title} title={'Nauka'}/>
        </div>
      </section>
    );
  }
}

export default List;
