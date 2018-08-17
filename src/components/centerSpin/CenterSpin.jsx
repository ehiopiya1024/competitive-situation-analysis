import React from "react";
import { Spin } from "antd";
import Styles from "./CenterSpin.less";

const CenterSpan = props => (
  <div
    className={Styles.root}
    style={props.padding ? { padding: "30px 0" } : null}
  >
    <Spin size="large" />
  </div>
);

export default CenterSpan;
