import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 200px;
  color: ${props => props.theme.palette.text.primary};
`

export const StyledTitle = styled.h1`
  font-weight: 300;
  margin-top: ${(prop) => prop.theme.spacing.double};
`

export const StyledSelect = styled.select`
  margin-top: ${(prop) => prop.theme.spacing.double};
  padding: ${(prop) => prop.theme.spacing.single};
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${(prop) => prop.theme.colors.BLACK};
  }
`

export const StyledOption = styled.option`
  display: ${(props) => (props.isToggle ? "none" : "block")};
`

export const StyledButton = styled.button`
  display: block;
  margin-top: ${(prop) => prop.theme.spacing.double};
  padding: ${(prop) => prop.theme.spacing.single};
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.palette.button.primary};
  }
  &:active {
    opacity: 0.8;
  }
`

