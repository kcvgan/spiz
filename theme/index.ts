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
  contentContainer: 'calc(100vh - 54px - 56px - 18px - 18px)',
};

type ShellHeights = typeof shellHeights;

const fontWeights = {
  thin: 100,
  regular: 300,
  semiBold: 400,
  bold: 600,
};

type FontWeights = typeof fontWeights;

const fontSizes = {
  small: '12px',
  base: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '32px',
};

type FontSizes = typeof fontSizes;

const appTheme = {
  borderRadius: '5px',
  padding,
  colors,
  shellHeights,
  fontWeights,
  fontSizes,
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

const getFontWeight = (weight: keyof FontWeights) => ({
  theme,
}: ThemeProps<DefaultTheme>) => theme.fontWeights[weight];

const getFontSize = (size: keyof FontSizes) => ({
  theme,
}: ThemeProps<DefaultTheme>) => theme.fontSizes[size];

export default appTheme;
export {
  getPadding,
  getColor,
  getBorderRadius,
  getShellHeights,
  getFontWeight,
  getFontSize,
};
