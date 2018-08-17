import React from "react";
import { Spin } from "antd";
import Styles from "./CenterSpin.less";

const CenterSpan = () => (
  <div className={Styles.root}>
    <Spin size="large" />
  </div>
);

export default CenterSpan;
