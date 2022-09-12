import 'styled-components'
import darkTheme from '../global/themes/darkTheme'

declare module 'styled-components' {
  type ThemeType = typeof darkTheme

  export interface DefaultTheme extends ThemeType {}
}
