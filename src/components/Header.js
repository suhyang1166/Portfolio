import React from "react";
import styled from "styled-components";
import LOGO from "../asset/img/LOGO.svg";
import { Link } from "react-router-dom";

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: #fff;
  z-index: 50;
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const IndexWrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 100px;
`;

const Index = styled.li`
  font-size: 18px;
  color: #808080;
  position: relative;
  text-transform: uppercase;
  &:hover {
    color: #29b66a;
    cursor: pointer;
  }
  &::before {
    content: "";
    width: 100%;
    height: 1.5px;
    background: #29b66a;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const Header = ({ onScrollToSection, sections }) => {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo src={LOGO} />
      </Link>
      <IndexWrap>
        {sections.map(({ name }) => (
          <Index key={name} onClick={() => onScrollToSection(name)}>
            {name}
          </Index>
        ))}
      </IndexWrap>
    </HeaderWrap>
  );
};

export default Header;
