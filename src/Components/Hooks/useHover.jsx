import React from "react";

export default function useHover() {
  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseOut = () => setHover(false);

  return [
    hover,
    {
      onMouseOut,
      onMouseEnter
    }
  ];
}
