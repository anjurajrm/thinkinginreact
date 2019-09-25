import React from "react";
import FeatureDetails from "./FeatureDetails";
import "./FeatureSection.css";
class FeaturesSection extends React.Component {
  render() {
    const featuresList = Object.keys(this.props.features).map(
      (feature, index) => {
        return (
          <div className="feature" key={index}>
            <div className="feature__name">
              <h3>{feature}</h3>
            </div>
            <ul className="feature__list">
              <FeatureDetails
                feature={this.props.features}
                key={index}
                spec={feature}
                selectedFeatures={this.props.selectedFeatures}
                handleUpdate={this.props.handleUpdate}
              />
            </ul>
          </div>
        );
      }
    );
    return (
      <section className="main__form">
        <h2>Customize your laptop</h2>
        {featuresList}
      </section>
    );
  }
}
export default FeaturesSection;
