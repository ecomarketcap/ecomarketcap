import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  cursorType: 'pointer',
  defaultRadius: 'md',
  headings: {
    fontWeight: 600,
  },
  globalStyles: (theme) => ({
    body: {
      margin: 0,
      padding: 0,
    },
  }),
};
