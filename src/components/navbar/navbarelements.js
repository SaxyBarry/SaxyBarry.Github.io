import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  max-height: 5vh;
  background-color: #48304dff;
`;

export const NavLink = styled(Link)`
    padding: 10px;
    color: #fbcaefff
    text-decoration: none;
    &.active {
    color: #d2f1e4ff;
    }
`;




