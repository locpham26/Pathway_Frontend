import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  height: var(--nav-height);
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 0 40px;
  background-color: var(--primary-navy);
  .header-inner {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

const StyledNavList = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 32px;
  ul {
    display: flex;
    list-style: none;
    margin: 0 16px;
    padding: 0;
    gap: 32px;
    li {
      position: relative;
      a {
        color: var(--primary-light);
        font-size: 20px;
        text-decoration: none;
        font-weight: 600;
        &:hover {
          color: var(--primary-yellow);
        }
      }
    }
  }
`;

const StyledLinkDecoration = styled.div`
  position: absolute;
  top: 120%;
  height: 3px;
  width: 100%;
  border-bottom: 3px dashed var(--primary-yellow);
  .decoration-inner {
    position: relative;
    width: 100%;
    height: 3px;
    .decoration-end {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: var(--primary-yellow);
      transform: rotate(45deg);
      left: 95%;
      bottom: -4px;
    }
  }
`;

const navItems = [
  { key: "route", label: "Lộ trình học", to: "/route" },
  { key: "course", label: " Khóa học", to: "/course" },
  { key: "blog", label: "Blog", to: "/blog" },
  { key: "about", label: "Về chúng tôi", to: "/about" },
];

const Nav = () => {
  return (
    <StyledHeader>
      <div className="header-inner">
        <StaticImage src="../../images/logo.png" alt="logo" />
        <StyledNavList>
          <ul>
            {navItems.map((item) => (
              <li key={item.key}>
                <Link to={item.to}>{item.label}</Link>
                <StyledLinkDecoration className="decoration">
                  <div className="decoration-inner">
                    <div className="decoration-end"></div>
                  </div>
                </StyledLinkDecoration>
              </li>
            ))}
          </ul>
        </StyledNavList>
      </div>
    </StyledHeader>
  );
};

export default Nav;
