import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../../styles";
import Nav from "./Nav";

const StyledContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding: 0px;
`;

const Layout = ({ children }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Nav />
          <StyledMain>{children}</StyledMain>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
