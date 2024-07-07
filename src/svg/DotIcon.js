import * as React from "react"
import Svg, { Circle } from "react-native-svg";
import { scale } from "../screens/Scaling";

function CircleIcon(props) {
  return (
    <Svg
      width={scale(9)}
      height={scale(9)}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={4.39189} cy={4.50005} r={4.39189} fill={props.color||"#00EB34"} />
    </Svg>
  )
}

export default CircleIcon
