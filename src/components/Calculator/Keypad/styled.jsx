import styled, { keyframes } from 'styled-components';

export const KeypadWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  grid-template-rows: repeat(4, 100px);
  grid-gap: ${prop => prop.theme.spacing.double};
  margin: ${prop => prop.theme.spacing.double};
`;

const push = keyframes`
  0% {
		border-radius: 10px;
	}
	
  100% {
		border-radius: 50%;
	}
`;

export const Button = styled.button`
  width: ${prop => prop.theme.spacing.ninety};
  height: ${prop => prop.theme.spacing.ninety};
  border: 1px solid ${props => props.theme.palette.text.primary};
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  transition: background-color 200ms linear;

  &:hover {
    background-color: ${props => props.theme.palette.button.primary};
    transition: background-color 200ms linear;
  }
  &:active {
    animation: ${push} 200ms ease-out;
    animation-fill-mode: forwards;
  }
`;
