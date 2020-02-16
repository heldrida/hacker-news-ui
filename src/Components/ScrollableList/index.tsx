import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ScrollWrapper,
  ScrollableListContainer,
  ScrollableListTop,
  ScrollableListCenter,
  ScrollableListBottom,
  ScrollableListContent
} from './styled'
import { IPropsScrollableList } from '../../Types'

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

interface IPropsScrollPosition {
  [name: string]: {
    y: number
  }
}

const ScrollableList: React.FC<IPropsScrollableList> = (props) => {
  const [height, setHeight] = useState<number>(0)
  const [scrollPosition, setScrollPosition] = useState<IPropsScrollPosition>({
    top: {
      y: 0
    },
    center: {
      y: 0
    },
    bottom: {
      y: 0
    }
  })
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height && setHeight(height)
  }, [])

  const scrollToHandler = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = window.innerHeight * 0.398
    const offsetBottom = window.innerHeight * 0.3

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
    document.addEventListener('scroll', scrollToHandler)

    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [scrollToHandler])

  return (
    <ScrollWrapper height={height}>
      <ScrollableListContainer>
        <ScrollableListTop>
          <ScrollableListContent posY={scrollPosition.top.y}>
              {
                mockData.map(v => <p>{v}</p>)
              }
          </ScrollableListContent>
        </ScrollableListTop>
        <ScrollableListCenter>
          <ScrollableListContent posY={scrollPosition.center.y}>
            <div ref={contentRef}>
              {
                mockData.map(v => <p>{v}</p>)
              }
            </div>
          </ScrollableListContent>
        </ScrollableListCenter>
        <ScrollableListBottom>
          <ScrollableListContent posY={scrollPosition.bottom.y}>
              {
                mockData.map(v => <p>{v}</p>)
              }
          </ScrollableListContent>
        </ScrollableListBottom>
      </ScrollableListContainer>
    </ScrollWrapper>
  )
}

export default ScrollableList
