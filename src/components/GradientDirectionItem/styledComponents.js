import styled from 'styled-components'

export const DirectionItem = styled.li`
  margin: 5px;
`

export const DirectionButton = styled.button`
  background-color: #ffffff;
  color: #334155;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px 20px 10px;
  cursor: pointer;
  opacity: ${props => (props.isActive === true ? 1 : 0.5)};
  @media screen and (max-width: 768px) {
    padding: 10px 10px 10px;
    width: 150px;
  }
`
