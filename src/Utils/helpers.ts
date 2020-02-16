import {
  SCROLL_CONTAINER_TOP,
  SCROLL_CONTAINER_BOTTOM,
  SCROLL_CONTAINER_TOP_RATIO,
  SCROLL_CONTAINER_BOTTOM_RATIO
} from './constants'

const getOffsetValue = (name: string): number => {
  let computedValue = 0
  if (name === SCROLL_CONTAINER_TOP) {
    computedValue = window.innerHeight * SCROLL_CONTAINER_TOP_RATIO
  } else if (name === SCROLL_CONTAINER_BOTTOM) {
    computedValue = window.innerHeight * SCROLL_CONTAINER_BOTTOM_RATIO
  }
  return computedValue
}

export {
  getOffsetValue
}