import React from "react";
import Styles from "./TagBox.less";

const TagBox = props => (
  <div className={Styles.root}>
    <div className={Styles.top}>{props.title}</div>
    <div className={Styles.bottom}>{props.tags}</div>
  </div>
);

export default TagBox;
