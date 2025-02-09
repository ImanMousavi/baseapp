import { style } from '@vanilla-extract/css';
import { vars } from 'web/src/theme/vars.css';

export const logo = style({
  display: 'block',
  height: '100%',
  width: 'auto',
  objectFit: 'contain',
  maxHeight: 45,
  maxWidth: 88,
});

export const beta = style({
  color: vars.colors.beta,
  left: 42,
  position: 'absolute',
  top: 34,
  width: 26,
});

export const svg = style({
  display: 'block',
});
