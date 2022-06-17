import { createTheme, globalStyle } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    sub: '#888888',
    btn: '#4DA9FF',
    textWhite: '#F9F9F9',
  },
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
globalStyle(`body[scheme='space_gray']`, {
  // @ts-ignore
  '--background_content': '#242424 !important',
  '--header_alternate_background': '#242424 !important',
  '--background_page': '#242424 !important',
});
globalStyle(`body`, {
  // @ts-ignore
  '--background_content': '#F9F9F9 !important',
  '--header_alternate_background': '#F9F9F9 !important',
  '--background_page': '#F9F9F9 !important',
});
