import styled from "styled-components"

export const HistoryWrapper = styled.div`
  width: 300px;
  border-left: 1px solid ${props => props.theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  background-color: #c6cfb7;
`

export const Title = styled.p`
  font-size: 20px;
  margin: 0 auto;
  user-select: none;
  color: ${p => p.theme.colors.RED};
  margin-bottom: ${(prop) => prop.theme.spacing.single};
`
export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  padding: 0 ${(prop) => prop.theme.spacing.double};
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    background-clip: content-box;
    border: 5px solid ${props => props.theme.palette.background.primary};
    border-radius: 25px;
  }
  &::-webkit-scrollbar {
    background: inherit;
  }
`

export const HistotyItem = styled.p`
  font-size: 20px;
  padding: ${(prop) => prop.theme.spacing.single} 0;
`