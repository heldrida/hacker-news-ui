import styled from 'styled-components'
import { IPropsTheme } from '../../Types'

interface IStoryContainer {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const StoryContainer = styled.div<IStoryContainer>`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom: 10rem;
  transition: background 0.3s;

  &:hover {
    background: ${(props: IPropsTheme) => props.theme.orange};
  }

  & > svg {
    position: relative;
    width: 14rem;
  }
`

const StoryTitle = styled.div`

`

export {
  StoryContainer,
  StoryTitle
}