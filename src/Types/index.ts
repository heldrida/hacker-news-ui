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

export {
  IPropsScrollableList,
  IPropsTheme,
  TThemeConf,
  IPropsScrollWrapper,
  IPropsScrollPosition,
  IPropsScrollableListContent
}