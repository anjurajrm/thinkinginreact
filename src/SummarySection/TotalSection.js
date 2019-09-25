import React from "react";

class TotalSection extends React.Component {
  render() {
    const total = Object.keys(this.props.features).reduce(
      (acc, curr) => acc + this.props.features[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(total)}
        </div>
      </div>
    );
  }
}
export default TotalSection;
