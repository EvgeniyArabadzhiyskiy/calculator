import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';

import { StyledContainer } from './Layout.styled';
import { lightTheme, darkTheme, coloredTheme } from '../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

const Layout = () => {
  const currentTheme = useSelector(state => state.settings.theme);

  // const location = useLocation();
  // console.log("Layout", location);

  const theme = {
    light: lightTheme,
    dark: darkTheme,
    colored: coloredTheme,
  };
  
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
