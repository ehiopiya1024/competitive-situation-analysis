import React from "react";
import { connect } from "dva";
import CenterSpin from "../../components/centerSpin/CenterSpin";
import SearchForm from "./components/SearchForm";
import Article from "../../components/articles/components/Article";
import Styles from "./SearchPage.less";

class SearchPage extends React.Component {
  render = () => {
    const { dispatch, search } = this.props;
    const { loading, data, total } = search;
    const articles = data
      ? data.map((v, k) => <Article data={v} key={k} />)
      : null;
    return (
      <div>
        <SearchForm dispatch={dispatch} />
        {total ? (
          <div className={Styles.info}>
            为您找到相关结果约
            {total}个
          </div>
        ) : null}
        {articles}
        {loading ? <CenterSpin padding={true} /> : null}
      </div>
    );
  };
}

export default connect(({ search }) => ({ search }))(SearchPage);
