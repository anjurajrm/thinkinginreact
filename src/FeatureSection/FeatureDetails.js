import React from "react";

class FeatureDetails extends React.Component {
  render() {
    let options = this.props.feature[this.props.spec].map((item, index) => {
      let ifselected =
        item.name === this.props.selectedFeatures[this.props.spec].name
          ? "feature__selected"
          : "";

      let ifselectedclass = "feature__option " + ifselected;

      return (
        <li className="feature__item" key={index}>
          <div
            className={ifselectedclass}
            onClick={event => this.props.handleUpdate(item, this.props.spec)}
          >
            {item.name}(
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.cost)}{" "}
            )
          </div>
        </li>
      );
    });
    return <div>{options}</div>;
  }
}
export default FeatureDetails;
