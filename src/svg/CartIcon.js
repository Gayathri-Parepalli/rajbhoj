import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { scale } from "../screens/Scaling";

function CartIcon(props) {
  return (
    <Svg
      width={scale(22)}
      height={scale(22)}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_285_195)">
        <Path
          d="M8.25 20.167a.917.917 0 100-1.834.917.917 0 000 1.834zM18.334 20.167a.917.917 0 100-1.834.917.917 0 000 1.834zM.917.917h3.667L7.04 13.19a1.834 1.834 0 001.834 1.476h8.91a1.833 1.833 0 001.833-1.476l1.467-7.69H5.5"
          stroke={props.color || "#fff"}
          strokeWidth={1.83333}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 7a1 1 0 011-1h13v7a1 1 0 01-1 1h-9a4 4 0 01-4-4V7z"
          stroke={props.color || "#fff"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_285_195">
          <Path fill={props.color || "#fff"} d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CartIcon
