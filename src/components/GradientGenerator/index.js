import {Component} from 'react'
import {
  GradientGeneratorContainer,
  Heading,
  Paragraph,
  DirectionsList,
  ColorsInputContainer,
  ColorsInputSubContainer,
  ColorText,
  ColorInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    firstInputColor: '#8ae323',
    secondInputColor: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  onDirectionChange = directionId => {
    this.setState({activeDirection: directionId})
  }

  getActiveColorDirection = () => {
    const {activeDirection} = this.state
    const filteredDirectionsList = gradientDirectionsList.filter(
      eachObj => eachObj.directionId === activeDirection,
    )
    const colorDirection = filteredDirectionsList[0].value
    return colorDirection
  }

  onFirstColorChange = event => {
    this.setState({firstInputColor: event.target.value})
  }

  onSecondColorChange = event => {
    this.setState({secondInputColor: event.target.value})
  }

  onGenerateGradientColor = () => {
    const {firstInputColor, secondInputColor} = this.state
    this.setState({firstColor: firstInputColor, secondColor: secondInputColor})
  }

  render() {
    const {
      activeDirection,
      firstInputColor,
      secondInputColor,
      firstColor,
      secondColor,
    } = this.state
    const activeColorDirection = this.getActiveColorDirection()

    return (
      <GradientGeneratorContainer
        colorDirection={activeColorDirection}
        firstColor={firstColor}
        secondColor={secondColor}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionsList>
          {gradientDirectionsList.map(eachObj => (
            <GradientDirectionItem
              key={eachObj.directionId}
              directionItem={eachObj}
              isActive={eachObj.directionId === activeDirection}
              onDirectionChange={this.onDirectionChange}
            />
          ))}
        </DirectionsList>
        <Paragraph>Pick The Colors</Paragraph>
        <ColorsInputContainer>
          <ColorsInputSubContainer>
            <ColorText>{firstInputColor}</ColorText>
            <ColorInput
              type="color"
              value={firstInputColor}
              onChange={this.onFirstColorChange}
            />
          </ColorsInputSubContainer>
          <ColorsInputSubContainer>
            <ColorText>{secondInputColor}</ColorText>
            <ColorInput
              type="color"
              value={secondInputColor}
              onChange={this.onSecondColorChange}
            />
          </ColorsInputSubContainer>
        </ColorsInputContainer>
        <GenerateButton type="button" onClick={this.onGenerateGradientColor}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
