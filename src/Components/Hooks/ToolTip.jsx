import React from "react";
import styled from "styled-components";
import useHover from "./useHover";

const ToolTipWrapper = styled.div`
  width: 22px;
  height: 22px;
  .tooltip {
    position: absolute;
    top: -30px;
    background: red;
    padding: 5px;
    border-radius: 2px;
    font-weight: 700;
    background: #333;
  }
`;

const ToolTip = ({ text, onClick, children }) => {
  const [hover, attrs] = useHover();
  return (
    <ToolTipWrapper onClick={onClick} {...attrs}>
      {hover && <div className="tooltip"> {text}</div>}
      {children}
    </ToolTipWrapper>
  );
};

export default ToolTip;
