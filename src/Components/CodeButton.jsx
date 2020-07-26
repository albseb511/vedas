import React from "react";
import styled from "styled-components";

const CodeButtonWrapper = styled.code`
  cursor: pointer;
  text-decoration: none;
  padding: 5px 20px;
  text-align: left;
  transition: 0.5s ease-in-out;
  border: 1px solid #00bcd4;
  font-size: 18px;
  border-radius: 2px;

  :hover {
    background: #00bcd4;
  }
`;

const CodeButton = ({ code }) => {
  return <CodeButtonWrapper>{code}</CodeButtonWrapper>;
};

export default CodeButton;
