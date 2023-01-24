import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(prop) => prop.theme.spacing.double};
  color: ${props => props.theme.palette.text.primary};
`

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`