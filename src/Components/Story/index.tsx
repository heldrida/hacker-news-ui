import React from 'react'
import { StoryContainer, StoryTitle  } from './styled'
import ArrowOut from '../../Icons/ArrowOut'

const Story = ({title, url}: {title: string, url: string}) => {
  const onCickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    window.open(url, '_blank')
  }
  return (
    <StoryContainer onClick={onCickHandler}>
        <StoryTitle>{title}</StoryTitle>
        <ArrowOut />
    </StoryContainer>
  )
}

export default Story
