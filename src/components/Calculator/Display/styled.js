import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  position: relative;
  padding: ${prop => prop.theme.spacing.double};
  border-bottom: 1px solid ${props => props.theme.palette.text.primary};
  margin: 0 ${prop => prop.theme.spacing.single};
  display: flex;
  justify-content: flex-end;
`;

export const DisplayError = styled.p`
  position: absolute;
  top: ${prop => prop.theme.spacing.double};
  left: ${prop => prop.theme.spacing.double};
  padding-right: ${prop => prop.theme.spacing.half};
  font-size: 20px;
  color: ${p => p.theme.colors.ERROR};
`;

export const Result = styled.p`
  font-size: 30px;
  padding-right: ${prop => prop.theme.spacing.triple};
`;
