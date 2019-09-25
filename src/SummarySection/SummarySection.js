import React from "react";
import SummaryDetails from "./SummaryDetails";
import TotalSection from "./TotalSection";
import "./SummarySection.css";
class SummarySection extends React.Component {
  render() {
    return (
      <div className="main__summary">
        <h2>Your Cart</h2>
        <SummaryDetails features={this.props.selectedFeatures} />
        <TotalSection features={this.props.selectedFeatures} />
      </div>
    );
  }
}
export default SummarySection;
