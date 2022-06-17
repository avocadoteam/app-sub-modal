import { globalStyle, style } from '@vanilla-extract/css';

export const hContainer = style({
  margin: '3rem 0',
  display: 'flex',
});

export const appImg = style({});

globalStyle(`${appImg} > div > div > div.vkuiAvatar`, {
  borderRadius: '1.75rem !important',
});
