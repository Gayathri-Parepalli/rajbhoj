import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";
import { scale } from "../screens/Scaling";
const GroupIcon = (props) => (
  <Svg
    width={scale(25)}
    height={scale(25)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={23}
      height={23}
      stroke={props.color || "#00EB34"}
      strokeWidth={2}
    />
    <Circle
      cx={12.5003}
      cy={12.5}
      r={4.39189}
      fill={props.color || "#00EB34"}
    />
  </Svg>
);
export default GroupIcon;
