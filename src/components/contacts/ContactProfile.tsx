import { useState } from 'react';
import { useParams } from 'react-router';
import useContactStore from '../../stores/contactStore';
import { Card, Avatar, Title, Stack, Group, Divider } from '@mantine/core';
import ContactDetail from './ContactDetail';
import ContactEdit from './ContactEdit';
import { Contact } from '../../data/contacts';
import classes from './contact.module.css';

export default function ContactProfile() {
  const { id } = useParams();
  const { findContact } = useContactStore();
  const contact = findContact(Number(id));

  const [editingField, setEditingField] = useState<keyof Contact | null>(null);

  if (!contact) {
    return <Title c="red">Contact not found.</Title>;
  }

  const handleFieldSave = (field: keyof typeof contact, value: string) => {
    console.log(field, value);
    setEditingField(null); // Exit edit mode
  };

  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Group
        align="center"
        gap="lg"
        mb="lg"
      >
        <Avatar
          size={120}
          radius={120}
          src={contact.photo}
          alt={contact.name}
        />
        <Title order={2}>{contact.name}</Title>
      </Group>
      <Divider my="sm" />
      <Stack gap="lg">
        {editingField === 'company' ? (
          <ContactEdit
            label="Company"
            value={contact.company}
            onSave={(value) => handleFieldSave('company', value)}
            onCancel={() => setEditingField(null)}
          />
        ) : (
          <ContactDetail
            label="Company"
            value={contact.company}
            onEdit={() => setEditingField('company')}
          />
        )}

        {editingField === 'title' ? (
          <ContactEdit
            label="Title"
            value={contact.title}
            onSave={(value) => handleFieldSave('title', value)}
            onCancel={() => setEditingField(null)}
          />
        ) : (
          <ContactDetail
            label="Title"
            value={contact.title}
            onEdit={() => setEditingField('title')}
          />
        )}

        {editingField === 'phone' ? (
          <ContactEdit
            label="Phone Number"
            value={contact.phone}
            onSave={(value) => handleFieldSave('phone', value)}
            onCancel={() => setEditingField(null)}
          />
        ) : (
          <ContactDetail
            label="Phone Number"
            value={contact.phone}
            onEdit={() => setEditingField('phone')}
          />
        )}

        {editingField === 'email' ? (
          <ContactEdit
            label="Email"
            value={contact.email}
            onSave={(value) => handleFieldSave('email', value)}
            onCancel={() => setEditingField(null)}
          />
        ) : (
          <ContactDetail
            label="Email"
            value={contact.email}
            onEdit={() => setEditingField('email')}
          />
        )}
      </Stack>
    </Card>
  );
}
