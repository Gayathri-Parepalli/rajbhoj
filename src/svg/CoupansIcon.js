import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { scale } from "../screens/Scaling";

function CoupansIcon(props) {
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
        d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 002.14-.806.503.503 0 00.15-.465L21.075 3.5a.6.6 0 00-.59-.5v0z"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
      />
      <Path
        d="M16.493 3l.5 5s-1 1-2.5 1-2.5-1-2.5-1V3h4.5z"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
      />
      <Path
        d="M11.993 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5h4.5z"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
      />
      <Path
        d="M7.493 3H3.502a.6.6 0 00-.592.501L2.205 7.73a.504.504 0 00.15.465c.328.29 1.06.806 2.138.806 1.5 0 2.5-1 2.5-1l.5-5V3z"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
      />
      <Path
        d="M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
      />
      <Path
        d="M14.833 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
        stroke={props.color || "#fff"}
        strokeWidth={1.5}
        strokeMiterlimit={16}
      />
    </Svg>
  );
}

export default CoupansIcon
