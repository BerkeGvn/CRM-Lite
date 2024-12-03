import { useState } from 'react';
import { Stack, TextInput, Group, Button } from '@mantine/core';

export default function EditableField({
  label,
  value,
  onSave,
  onCancel,
}: {
  label: string;
  value: string | undefined;
  onSave: (newValue: string) => void;
  onCancel: () => void;
}) {
  const [inputValue, setInputValue] = useState(value || '');

  return (
    <Stack gap={0}>
      <Group
        justify="flex-start"
        align="flex-end"
      >
        <TextInput
          c="dimmed"
          label={label}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size="md"
        />
        <Group gap="xs">
          <Button
            size="xs"
            variant="light"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            size="xs"
            onClick={() => onSave(inputValue)}
          >
            Save
          </Button>
        </Group>
      </Group>
    </Stack>
  );
}
