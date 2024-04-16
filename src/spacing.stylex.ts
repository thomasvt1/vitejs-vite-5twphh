import * as stylex from '@stylexjs/stylex';

// NOTE: this differs a bit from blokkie current spacing because we cannot execute a function from the styles in stylex
// Even though this hardcoded values suffice for spacing (margins/paddings) and this way are more explicit and since it is not a function
// it cannot be abused to create any other value ;)

// eslint-disable-next-line import/prefer-default-export
export const spacing = stylex.defineVars({
  space0px: '0px',
  space4px: '4px', // not sure but I think this might be a nice one to add
  space8px: '8px',
  space16px: '16px',
  space24px: '24px',
  space32px: '32px',
  space64px: '64px',
  space128px: '128px',
  space256px: '256px',
  space512px: '512px',
});
