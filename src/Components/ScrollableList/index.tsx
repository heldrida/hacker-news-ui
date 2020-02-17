import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { queryNewStories } from '../../Utils/queries'
import {
  ScrollWrapper,
  ScrollableListContainer,
  ScrollableListTop,
  ScrollableListCenter,
  ScrollableListBottom,
  ScrollableListContent
} from './styled'
import { IPropsScrollableList, IPropsScrollPosition, INewStories } from '../../Types'
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
  const { data: queryNewsStoriesResponseData } = useQuery(queryNewStories)
  const [newStories, setNewStories] = useState<INewStories[] | undefined>()

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

  useEffect(() => {
    setIsVisible(true)
  }, [setIsVisible])

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height &&
    setHeight(height * 1.2) // extra height to compensate scroll to main middle content
  }, [isVisible, newStories])

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
    if (!queryNewsStoriesResponseData) return
    const { newStories } = queryNewsStoriesResponseData.hn
    newStories && setNewStories(newStories)
  }, [queryNewsStoriesResponseData])

  return (isVisible && (
      <ScrollWrapper height={height}>
        <ScrollableListContainer>
          <ScrollableListTop>
            <ScrollableListContent posY={scrollPosition.top.y}>
                <Logo />
                {
                  newStories &&
                  newStories.map((v, k) => <p key={k}>{v.title}</p>)
                }
            </ScrollableListContent>
          </ScrollableListTop>
          <ScrollableListCenter>
            <ScrollableListContent posY={scrollPosition.center.y}>
              <div ref={contentRef}>
                <Logo/>
                {
                  newStories &&
                  newStories.map((v, k) => <p key={k}>{v.title}</p>)
                }
              </div>
            </ScrollableListContent>
          </ScrollableListCenter>
          <ScrollableListBottom>
            <ScrollableListContent posY={scrollPosition.bottom.y}>
                <Logo/>
                {
                  newStories &&
                  newStories.map((v, k) => <p key={k}>{v.title}</p>)
                }
            </ScrollableListContent>
          </ScrollableListBottom>
        </ScrollableListContainer>
      </ScrollWrapper>)) ||
      <p>[TODO] Loading component...</p>
}

export default ScrollableList
