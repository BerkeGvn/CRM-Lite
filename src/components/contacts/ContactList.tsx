import useContactStore from '../../stores/contactStore';
import {
  Table,
  Group,
  Avatar,
  Text,
  Badge,
  Anchor,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { TbEye, TbTrash } from 'react-icons/tb';
import { setColorSheme } from '../../utils/themeUtils';
import { useNavigate } from 'react-router';

export default function ContactList({ openModal: openModal }: { openModal: () => void }) {
  const { contacts } = useContactStore();
  const { colorScheme } = useMantineColorScheme();
  const navigate = useNavigate();
  const rows = contacts.map((contact) => (
    <Table.Tr
      key={contact.id}
      bg={setColorSheme(colorScheme, 'dark.7', 'gray.0')}
    >
      <Table.Td>
        <Group gap="sm">
          <Avatar
            size={30}
            radius={30}
            src={contact.photo}
          />
          <Text
            fz="sm"
            fw={500}
          >
            {contact.name}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge
          color="indigo"
          variant="light"
        >
          {contact.title}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor
          component="button"
          size="sm"
        >
          {contact.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{contact.phone}</Text>
      </Table.Td>
      <Table.Td>
        <Group
          gap="xs"
          justify="flex-end"
        >
          <ActionIcon
            variant="subtle"
            color="gray"
            onClick={() => {
              openModal();
              navigate(`/contacts/${contact.id}`);
            }}
          >
            <TbEye />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color="red"
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr bg={setColorSheme(colorScheme, 'dark.5', 'gray.2')}>
            <Table.Th>Employee</Table.Th>
            <Table.Th>Job title</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
