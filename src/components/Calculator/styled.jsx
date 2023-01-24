import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  margin-top: ${prop => prop.theme.spacing.double};
  color: ${props => props.theme.palette.text.primary};
`;

export const CalculatorWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  background-color: #76c2d9;
`;
