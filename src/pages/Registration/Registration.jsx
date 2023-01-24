import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Registration = () => {
  return (
    <div>
      <h1>REGISTRATION</h1>
      <StyledLink to="about">About</StyledLink>

      <Outlet />
    </div>
  );
};

export default Registration;
