import React, { useState, useEffect, useRef } from 'react'
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

const ScrollableList: React.FC<IPropsScrollableList> = (props) => {
  const [height, setHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height && setHeight(height)
  }, [])

  return (
    <ScrollWrapper height={height}>
      <ScrollableListContainer>
        <ScrollableListTop>
          <ScrollableListContent>
              {
                mockData.map(v => <p>{v}</p>)
              }
          </ScrollableListContent>
        </ScrollableListTop>
        <ScrollableListCenter>
          <ScrollableListContent>
            <div ref={contentRef}>
              {
                mockData.map(v => <p>{v}</p>)
              }
            </div>
          </ScrollableListContent>
        </ScrollableListCenter>
        <ScrollableListBottom>
          <ScrollableListContent>
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
