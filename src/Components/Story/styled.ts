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
  position: relative;

  &:hover {
    background: ${(props: IPropsTheme) => props.theme.orange};

    & span {
      opacity: 0.7;
    }
  }

  & > svg {
    position: relative;
    width: 14rem;
  }

  & span {
    position: absolute;
    bottom: -3rem;
    right: 0;
    font-size: 2rem;
    opacity: 0;
    background: ${(props) => props.theme.platinum};
  }
`

const StoryTitle = styled.div`

`

export {
  StoryContainer,
  StoryTitle
}