import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ScrollWrapper,
  ScrollableListContainer,
  ScrollableListTop,
  ScrollableListCenter,
  ScrollableListBottom,
  ScrollableListContent
} from './styled'
import { IPropsScrollableList, IPropsScrollPosition } from '../../Types'
import { getOffsetValue } from '../../Utils/helpers'
import { SCROLL_CONTAINER_TOP, SCROLL_CONTAINER_BOTTOM } from '../../Utils/constants'
import Logo from '../../Icons/Logo'

const mockData = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure similique, facere \
in id laboriosam rem voluptas ducimus alias inventore earum explicabo consequuntur praesentium maxime ad aspernatur hic, eius veniam?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure similique, facere \
in id laboriosam rem voluptas ducimus alias inventore earum explicabo consequuntur praesentium maxime ad aspernatur hic, eius veniam?', 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure similique, facere \
in id laboriosam rem voluptas ducimus alias inventore earum explicabo consequuntur praesentium maxime ad aspernatur hic, eius veniam?', 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure similique, facere \
in id laboriosam rem voluptas ducimus alias inventore earum explicabo consequuntur praesentium maxime ad aspernatur hic, eius veniam?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure similique, facere \
in id laboriosam rem voluptas ducimus alias inventore earum explicabo consequuntur praesentium maxime ad aspernatur hic, eius veniam?']

const ScrollableList: React.FC<IPropsScrollableList> = (props) => {
  const initialState = {
    top: {
      y: 0
    },
    center: {
      y: 0
    },
    bottom: {
      y: 0
    }
  }
  const [height, setHeight] = useState<number>(0)
  const [scrollPosition, setScrollPosition] = useState<IPropsScrollPosition>(initialState)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState<number>(0)
  const [rotateY, setRotateY] = useState<number>(0)

  const scrollToHandler = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = getOffsetValue(SCROLL_CONTAINER_TOP)
    const offsetBottom = getOffsetValue(SCROLL_CONTAINER_BOTTOM)

    setScrollPosition({
      top: {
        y: -(scrollY-offsetTop)
      },
      center: {
        y: -scrollY
      },
      bottom: {
        y: -(scrollY+offsetBottom)
      },
    })
  }, [])

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    const DEG = 180
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const percX = innerWidth && (clientX/innerWidth)
    const percY = innerHeight && (clientY/innerHeight)

    setRotateX(percX * DEG)
    setRotateY(percY * DEG)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [setIsVisible])

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height &&
    setHeight(height * 1.2) // extra height to compensate scroll to main middle content
  }, [isVisible])

  useEffect(() => {
    scrollToHandler()
  }, [isVisible, scrollToHandler])

  useEffect(() => {
    document.addEventListener('scroll', scrollToHandler)
    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [isVisible, scrollToHandler])

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [isVisible, mouseMoveHandler])

  return (isVisible && (
      <ScrollWrapper height={height}>
        <ScrollableListContainer rotateX={rotateX} rotateY={rotateY}>
          <ScrollableListTop>
            <ScrollableListContent posY={scrollPosition.top.y}>
                <Logo />
                {
                  mockData.map((v, k) => <p key={k}>{v}</p>)
                }
            </ScrollableListContent>
          </ScrollableListTop>
          <ScrollableListCenter>
            <ScrollableListContent posY={scrollPosition.center.y}>
              <div ref={contentRef}>
                <Logo/>
                {
                  mockData.map((v, k) => <p key={k}>{v}</p>)
                }
              </div>
            </ScrollableListContent>
          </ScrollableListCenter>
          <ScrollableListBottom>
            <ScrollableListContent posY={scrollPosition.bottom.y}>
                <Logo/>
                {
                  mockData.map((v, k) => <p key={k}>{v}</p>)
                }
            </ScrollableListContent>
          </ScrollableListBottom>
        </ScrollableListContainer>
      </ScrollWrapper>)) ||
      <p>[TODO] Loading component...</p>
}

export default ScrollableList
