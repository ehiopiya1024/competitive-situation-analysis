import React from "react";
import { connect } from "dva";
import CenterSpin from "../../components/centerSpin/CenterSpin";
import SearchForm from "./components/SearchForm";
import Article from "../../components/articles/components/Article";

class SearchPage extends React.Component {
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "search/clear" });
  }

  render = () => {
    const { dispatch, search } = this.props;
    const { loading, data } = search;
    const articles = data
      ? data.map((v, k) => <Article data={v} key={k} />)
      : null;
    return (
      <div>
        <SearchForm dispatch={dispatch} />
        {loading ? <CenterSpin padding={true} /> : articles}
      </div>
    );
  };
}

export default connect(({ search }) => ({ search }))(SearchPage);
