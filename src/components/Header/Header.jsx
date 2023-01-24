import { StyledContainer } from 'components/Layout/Layout.styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  StyledHeader,
  StyledTitle,
  StyledUl,
  StyledLi,
  StyledRouterLink,
  FlexWrapper,
} from './Header.styled';
// import { PATH_PAGE } from '@/routes/path'

export const PATH_PAGE = {
  homeFC: '/',
  homeCC: 'homecc',
  settings: 'settings',
};

const pathRoute = [
  { path: PATH_PAGE.homeFC, name: 'Home(FC)' },
  { path: PATH_PAGE.homeCC, name: 'Home(CC)' },
  { path: PATH_PAGE.settings, name: 'Settings' },
  { path: 'registration', name: 'Registration' },
];

const Header = () => {
  // const location = useLocation();
  // console.log("Header", location);
  return (
    <StyledHeader>
      <StyledContainer>
        <FlexWrapper>
        <StyledTitle>Calculator App</StyledTitle>
        <StyledUl>
          {pathRoute.map(({ path, name }) => (
            <StyledLi key={name}>
              <StyledRouterLink to={path}
              // state={{ from: location }}
              >{name}</StyledRouterLink>
            </StyledLi>
          ))}
        </StyledUl>
        </FlexWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
