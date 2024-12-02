// some ui that i gave the color myself doesn't have a color scheme so i have to set the color myself
export const setColorSheme = (colorScheme: string, colorOne: string, colorTwo: string) =>
  colorScheme === 'dark' ? colorOne : colorTwo;
