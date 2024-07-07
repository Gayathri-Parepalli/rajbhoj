import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { scale } from "../screens/Scaling";

function AddIcon(props) {
  return (
    <Svg
      width={scale(6)}
      height={scale(6)}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.27 5.07V.04h1.42v5.03H2.27zM.5 3.21v-1.3h4.97v1.3H.5z"
        fill={props.color||"#000"}
      />
    </Svg>
  )
}

export default AddIcon
