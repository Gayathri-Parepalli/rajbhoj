import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { scale } from "../screens/Scaling"

function HomeIcon(props) {
  return (
    <Svg
      width={scale(24)}
      height={scale(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.21 22.372V12.227h5.74v10.145"
        stroke={props.color||"#fff"}
        strokeWidth={2.02897}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.124 9.184l8.957-7.101 8.957 7.101v11.16a2.05 2.05 0 01-.583 1.434c-.374.38-.88.595-1.408.595H5.114a1.971 1.971 0 01-1.407-.595 2.05 2.05 0 01-.583-1.434V9.183z"
        stroke={props.color||"#fff"}
        strokeWidth={2.02897}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
