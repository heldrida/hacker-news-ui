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

export {
  IPropsScrollableList,
  IPropsTheme,
  TThemeConf,
  IPropsScrollWrapper
}