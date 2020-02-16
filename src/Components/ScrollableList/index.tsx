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

const ScrollableList: React.FC<IPropsScrollableList> = (props) => {
  const [height, setHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = contentRef.current?.clientHeight
    height && setHeight(height)
    console.log('[debug] height: ', height)
  }, [])

  return (
    <ScrollWrapper height={height}>
      <ScrollableListContainer>
        <ScrollableListTop>
          <ScrollableListContent>
            <div ref={contentRef}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur iure similique, facere in id laboriosam rem voluptas
                ducimus alias inventore earum explicabo consequuntur praesentium
                maxime ad aspernatur hic, eius veniam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur iure similique, facere in id laboriosam rem voluptas
                ducimus alias inventore earum explicabo consequuntur praesentium
                maxime ad aspernatur hic, eius veniam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur iure similique, facere in id laboriosam rem voluptas
                ducimus alias inventore earum explicabo consequuntur praesentium
                maxime ad aspernatur hic, eius veniam?
              </p>
            </div>
          </ScrollableListContent>
        </ScrollableListTop>
        <ScrollableListCenter>
          <ScrollableListContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
              iure similique, facere in id laboriosam rem voluptas ducimus alias
              inventore earum explicabo consequuntur praesentium maxime ad
              aspernatur hic, eius veniam?
            </p>
          </ScrollableListContent>
        </ScrollableListCenter>
        <ScrollableListBottom>
          <ScrollableListContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iure similique, facere in id laboriosam rem voluptas
              ducimus alias inventore earum explicabo consequuntur praesentium
              maxime ad aspernatur hic, eius veniam?
            </p>
          </ScrollableListContent>
        </ScrollableListBottom>
      </ScrollableListContainer>
    </ScrollWrapper>
  )
}

export default ScrollableList
