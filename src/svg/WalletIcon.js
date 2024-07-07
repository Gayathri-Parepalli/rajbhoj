import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { scale } from "../screens/Scaling";

function WalletIcon(props) {
  return (
    <Svg
      width={scale(26)}
      height={scale(27)}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.474 7.573v2.656c.705.408 1.195 1.142 1.195 2.004v6.99c0 .862-.49 1.596-1.195 2.004v2.656c0 1.282-1.076 2.33-2.392 2.33H6.342c-1.327 0-2.39-1.048-2.39-2.33V7.573c0-1.282 1.063-2.33 2.39-2.33h16.74c1.316 0 2.392 1.048 2.392 2.33zm-.552 4.912a2 2 0 00-2-2H17.31a2 2 0 00-2 2v5.612a2 2 0 002 2h5.612a2 2 0 002-2v-5.612zM5.699 24.465V6.117h18.349v2.622h-7.864a2.629 2.629 0 00-2.621 2.621v7.864a2.629 2.629 0 002.621 2.621h7.864v2.622H5.698zM18.083 15.5a1.938 1.938 0 113.876 0 1.938 1.938 0 01-3.876 0z"
        fill={props.color || "#fff"}
      />
    </Svg>
  );
}

export default WalletIcon;
