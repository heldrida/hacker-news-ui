import styled from 'styled-components'
import { IPropsScrollWrapper } from '../../Types'

const ScrollWrapper = styled.div<IPropsScrollWrapper>`
  position: relative;
  height: ${(props: IPropsScrollWrapper) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScrollableListContainer = styled.div`
  font-size: 6vh;
  line-height: 1.5;
  position: relative;
  height: 100vh;
  perspective: 40rem;
  max-width: 900px;
  position: fixed;
  top: 0;
  text-align: justify;
`

const ScrollableListTop = styled.div`
  height: 40vh;
  background: peachpuff;
  transform-origin: bottom center;
  transform: rotateX(-70deg);
  overflow: hidden;
`

const ScrollableListCenter = styled.div`
  padding: 0;
  background: pink;
  margin: 0;
  height: 30vh;
  overflow: hidden;
`

const ScrollableListBottom = styled.div`
  height: 80vh;
  background: #ffcc00;
  transform-origin: top center;
  transform: rotateX(-50deg);
  overflow: hidden;
`

const ScrollableListContent = styled.div`
  font-size: 4rem;
  line-height: 1.5;
`

export {
  ScrollWrapper,
  ScrollableListContainer,
  ScrollableListTop,
  ScrollableListCenter,
  ScrollableListBottom,
  ScrollableListContent
}