import * as React from "react";
import Svg, { Line, Circle } from "react-native-svg";
import { scale } from "../screens/Scaling";
const SearchIcon = (props) => (
  <Svg
    fill="#000000"
    width={scale(24)}
    height={scale(24)}
    viewBox="0 0 24 24"
    id="search"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <Line
      id="secondary"
      x1={21}
      y1={21}
      x2={15}
      y2={15}
      style={{
        fill: "none",
        stroke: props.color||"#FFFFFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <Circle
      id="primary"
      cx={10}
      cy={10}
      r={7}
      style={{
        fill: "none",
        stroke: props.color||"#FFFFFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default SearchIcon;
