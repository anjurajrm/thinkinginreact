import React from "react";

class SummaryDetails extends React.Component {
  render() {
    let summary = Object.keys(this.props.features).map((feature, index) => {
      return (
        <div key={index} className="summary__option">
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">
            {this.props.features[feature].name}
          </div>
          <div className="summary__option__cost">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(this.props.features[feature].cost)}
          </div>
        </div>
      );
    });
    return <div>{summary}</div>;
  }
}
export default SummaryDetails;
