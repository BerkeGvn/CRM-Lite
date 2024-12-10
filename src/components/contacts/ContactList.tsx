import useContactStore from '../../stores/contactStore';
import ContactStatus from './ContactStatus';
import { Table, Group, Avatar, Text, Badge, Anchor, ActionIcon } from '@mantine/core';
import { TbEye, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import classes from './contact.module.css';

export default function ContactList({ openModal: openModal }: { openModal: () => void }) {
  const { contacts } = useContactStore();
  const navigate = useNavigate();
  const rows = contacts.map((contact) => (
    <Table.Tr
      key={contact.id}
      className={classes.tableMain}
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
      <Table.Td>{contact.company}</Table.Td>
      <Table.Td>
        <Anchor
          component="button"
          size="sm"
        >
          {contact.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <ContactStatus contactStatus={contact.dealStatus} />
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
          <Table.Tr className={classes.tableHeader}>
            <Table.Th>Employee</Table.Th>
            <Table.Th>Job title</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
