import React from "react";

class Tools extends React.Component {
  render() {
    const { children } = this.props;
    const onlychild = React.Children.only(children);
    const count=React.Children.count(onlychild)
    return<div>
      <div>{children}</div>
      <h2>{onlychild}</h2>
      <h3>{count}</h3>
    </div>
  }
}

export default Tools;
