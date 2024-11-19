import { ActionIcon, useMantineColorScheme, useComputedColorScheme, rem } from '@mantine/core';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export default function ColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'light' ? (
        <IoMoonOutline style={{ width: rem(20), height: rem(20) }} />
      ) : (
        <IoSunnyOutline style={{ width: rem(20), height: rem(20) }} />
      )}
    </ActionIcon>
  );
}
