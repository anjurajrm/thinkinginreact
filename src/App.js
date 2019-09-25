import React from "react";
import FeaturesSection from "./FeatureSection/FeaturesSection";
import "./App.css";
import SummarySection from "./SummarySection/SummarySection";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  handleUpdate(newValue, feature) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeaturesSection
            features={this.props.features}
            selectedFeatures={this.state.selected}
            handleUpdate={(newValue, feature) =>
              this.handleUpdate(newValue, feature)
            }
          />
          <SummarySection selectedFeatures={this.state.selected} />
        </main>
      </div>
    );
  }
}
export default App;
