import { createTheme, globalStyle } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {},
});

globalStyle(`*`, {
  boxSizing: 'border-box',
});
globalStyle(`html, body`, {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  background: '#F9F9F9',
  fontFamily: `'Helvetica Neue', arial, sans-serif`,
  fontWeight: 400,
  color: '#2C2C2C',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontSize: '16px',
});
