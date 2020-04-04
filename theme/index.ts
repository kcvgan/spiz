import { DefaultTheme, ThemeProps } from 'styled-components';

const colors = {
  main: 'cyan',
  secondary: 'magenta',
  lightGrey: 'lightgrey',
  white: 'white',
  slightlyRed: '#EC615B',
  neonBlue: '#4639D0',
  backgroundGrey: '#F5F5F5',
};

type Colors = typeof colors;

const padding = {
  small: '8px',
  medium: '12px',
  large: '18px',
};

type Padding = typeof padding;

const shellHeights = {
  header: '54px',
  navBar: '57px',
};

type ShellHeights = typeof shellHeights;

const appTheme = {
  borderRadius: '5px',
  padding,
  colors,
  shellHeights,
};

const getPadding = (size: keyof Padding) => (props: ThemeProps<DefaultTheme>) =>
  props.theme.padding[size];

const getColor = (color: keyof Colors) => ({
  theme,
}: ThemeProps<DefaultTheme>) => theme.colors[color];

const getBorderRadius = ({ theme }: ThemeProps<DefaultTheme>) =>
  theme.borderRadius;

const getShellHeights = (height: keyof ShellHeights) => ({
  theme,
}: ThemeProps<DefaultTheme>) => theme.shellHeights[height];

export default appTheme;
export { getPadding, getColor, getBorderRadius, getShellHeights };
