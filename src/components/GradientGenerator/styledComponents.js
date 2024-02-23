import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 0px;
  background-image: linear-gradient(
    to ${props => `${props.colorDirection}`},
    ${props => `${props.firstColor}`},
    ${props => `${props.secondColor}`}
  );
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin: 15px;
  }
`

export const DirectionsList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    align-self: center;
    flex-wrap: wrap;
  }
`

export const ColorsInputContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`
export const ColorsInputSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorText = styled(Paragraph)`
  font-size: 17px;
`

export const ColorInput = styled.input`
  background-color: transparent;
  height: 47px;
  width: 85px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  width: 100px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 12px 20px 12px;
  margin-top: 20px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`
