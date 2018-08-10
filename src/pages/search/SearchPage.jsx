import React from 'react';
import styles from './SearchPage.less';

class SearchPage extends React.Component {
  render() {
    console.log(this)
    return (
      <div className={styles.root}>
        <h1>search</h1>
      </div>
    )
  }
}

export default SearchPage