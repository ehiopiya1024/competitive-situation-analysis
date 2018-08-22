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
    let info;
    if (total === undefined) {
      info = null;
    } else if (total === 0) {
      info = (
        <div className={Styles.imageInfo}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534874505443&di=461ad47fd76635bc2dd1c4659585e03f&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201711%2F23%2Ffe79214242.jpg" />
          <div className={Styles.text}>没有找到相关结果</div>
        </div>
      );
    } else if (total === -1) {
      info = <div className={Styles.root}>未知错误</div>;
    } else {
      info = (
        <div className={Styles.info}>
          为您找到相关结果约
          {total}个
        </div>
      );
    }
    return (
      <div>
        <SearchForm dispatch={dispatch} />
        {info}
        {articles}
        {loading ? <CenterSpin padding={true} /> : null}
      </div>
    );
  };
}

export default connect(({ search }) => ({ search }))(SearchPage);
