// TODO: add and export your own actions
import cities from "../cities";

export function setCities() {
  return {
    type: "SET_FLATS",
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: "SET_CITY",
    payload: city
  };
}
