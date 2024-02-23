import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {isActive, onDirectionChange, directionItem} = props
  const {directionId, displayText} = directionItem

  const onClicked = () => {
    onDirectionChange(directionId)
  }

  return (
    <DirectionItem>
      <DirectionButton isActive={isActive} onClick={onClicked}>
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
