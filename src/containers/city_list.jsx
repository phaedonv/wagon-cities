import React, { Component } from "react";
import { bindActionCreators } from "redux";
import City from "../containers/city";

import { setCities } from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="city_list col-sm-7">
        {this.props.cities.map((flat, index) => {
          return <City key={city.name} city={city} tabIndex={index} />;
        })}
      </div>
    );
  }
}

