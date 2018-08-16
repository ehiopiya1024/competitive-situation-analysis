import React from "react";
import styles from "./SearchPage.less";
import SearchForm from "./components/SearchForm";

const SearchPage = () => (
  <div className={styles.root}>
    <SearchForm />
  </div>
);

export default SearchPage;
