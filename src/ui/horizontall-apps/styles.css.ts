import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';

export const hContainer = style({
  margin: '3rem 0 2rem',
  display: 'flex',
});

export const appImg = style({
  marginLeft: '.5rem',
  transition: 'all .2s ease-out',
  cursor: 'pointer',
  borderRadius: '1.75rem',

  ':active': {
    transform: 'translateY(3px)',
    boxShadow: '0 4px 4px -3px rgba(127, 140, 153, 0.6)',
  },
});

globalStyle(`${appImg}  > div.vkuiAvatar`, {
  borderRadius: '1.75rem !important',
});

export const mTitle = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '1.5rem',
});
export const mSubTitle = style({
  fontSize: '.9rem',
  textAlign: 'center',
  color: vars.color.sub,
});

export const bFixed = style({
  padding: '1rem',
});
export const button = style({
  borderRadius: '2rem',
  height: '3rem',
  padding: '.25rem 1rem',
  backgroundColor: `${vars.color.btn} !important`,
  color: `${vars.color.textWhite} !important`,
});
export const bTitle = style([
  mSubTitle,
  {
    marginTop: '.5rem',
  },
]);

export const betweenFixed = style({
  paddingTop: '178px',
  paddingBottom: '108px',
  backgroundColor: 'var(--background_content)',
});

export const dTitle = style({
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.2rem',
});
export const dSubTitle = style({
  fontSize: '.9rem',
  color: vars.color.sub,
});

export const dAva = style({
  backgroundColor: '#fff',
});

globalStyle(`${dAva} > div`, {
  color: vars.color.btn,
});
