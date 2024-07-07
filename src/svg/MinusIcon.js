import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { scale } from "../screens/Scaling";

function MinusIcon(props) {
  return (
    <Svg
      width={scale(6)}
      height={scale(3)}
      viewBox="0 0 6 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.94 2.063V.643h4.21v1.42H.94z" fill={props.color||"#fff"} />
    </Svg>
  )
}

export default MinusIcon
