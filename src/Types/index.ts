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

interface IPropsScrollableListContainer {
  rotateX: number,
  rotateY: number
}

interface IPropsScrollableListContent {
  posY?: number
}

export {
  IPropsScrollableList,
  IPropsTheme,
  TThemeConf,
  IPropsScrollWrapper,
  IPropsScrollPosition,
  IPropsScrollableListContent,
  IPropsScrollableListContainer
}