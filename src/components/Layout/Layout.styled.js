import styled from "styled-components"

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding:0 ${(prop) => prop.theme.spacing.double};
`