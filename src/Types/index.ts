type TThemeConf = {
  [name: string]: string
}

interface IPropsTheme {
  theme: TThemeConf
}

interface IPropsScrollableList {

}

interface IPropsScrollWrapper {
  height: number
}

interface IPropsScrollPosition {
  [name: string]: {
    y: number
  }
}

interface IPropsScrollableListContent {
  posY?: number
}

interface INewStories {
  id: string,
  by: {
    id: string
    __typename: string
  },
  title: string,
  url: string,
  time: number,
  score: number,
  __typename: string
}

interface IPropsScroll {
  hide: boolean
}

export {
  IPropsScrollableList,
  IPropsTheme,
  TThemeConf,
  IPropsScrollWrapper,
  IPropsScrollPosition,
  IPropsScrollableListContent,
  INewStories,
  IPropsScroll
}