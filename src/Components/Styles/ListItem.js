import styled from "styled-components";

export const List = styled.ol`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const ListItem = styled.li`
  background-color: ${({ state }) => (state === 1 ? "#00bcd4" : "#181818")};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  border: ${({ state }) =>
    state !== -1 ? "4px solid #00bcd4" : "4px solid #333"};
  margin-right: 30px;
  float: left;
  position: relative;

  ::before {
    content: "";
    height: 4px;
    width: ${props => (props.first ? "0px" : "30px")};
    position: absolute;
    background-color: ${({ state }) => (state !== -1 ? "#00bcd4" : "#333")};
    top: calc(50% - 2px);
    right: calc(100% + 4px);
  }
  > * {
    cursor: pointer;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    position: absolute;
  }
`;
