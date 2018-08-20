import React from "react";
import { connect } from "dva";
import CenterSpin from "../../components/centerSpin/CenterSpin";
import SearchForm from "./components/SearchForm";
import Article from "../../components/articles/components/Article";

class SearchPage extends React.Component {
  pullData = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === clientHeight + scrollTop) {
      const { dispatch, search } = this.props;
      const { page } = search;
      dispatch({ type: "search/pullData", page });
    }
  };

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "search/clear" });
    window.removeEventListener("scroll", this.pullData);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.pullData);
  }

  render = () => {
    const { dispatch, search } = this.props;
    const { loading, data, loadingPull } = search;
    const articles = data
      ? data.map((v, k) => <Article data={v} key={k} />)
      : null;
    return (
      <div>
        <SearchForm dispatch={dispatch} />
        {loading ? <CenterSpin padding={true} /> : articles}
        {loadingPull ? <CenterSpin padding={true} /> : null}
      </div>
    );
  };
}

export default connect(({ search }) => ({ search }))(SearchPage);
