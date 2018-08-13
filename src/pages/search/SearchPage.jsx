import React from 'react';
import { Form } from 'antd';
import styles from './SearchPage.less';
import SearchForm from './SearchForm';

const SearchPage = () => {
  const MyForm = Form.create()(SearchForm);
  return (
    <div className={styles.root}>
      <MyForm />
    </div>
  )
}

export default SearchPage