export const setColorSheme = (colorScheme: string, colorOne: string, colorTwo: string) =>
  colorScheme === 'dark' ? colorOne : colorTwo;
