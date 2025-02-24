import { useState } from 'react';
import { useParams } from 'react-router';
import useContactStore from '../../stores/contactStore';
import { Card, Avatar, Title, Stack, Group, Divider, Flex, Container } from '@mantine/core';
import ContactDetail from './ContactDetail';
import ContactEdit from './ContactEdit';
import { Contact } from '../../data/contacts';
import classes from './contact.module.css';

interface EditableFieldProps {
  field: keyof Contact;
  label?: string;
  value: string;
  editingField: keyof Contact | null;
  setEditingField: (field: keyof Contact | null) => void;
  handleFieldSave: (field: keyof Contact, value: string) => void;
  title?: boolean;
}

const EditableField = ({
  field,
  label,
  value,
  editingField,
  setEditingField,
  handleFieldSave,
  title,
}: EditableFieldProps) => {
  return editingField === field ? (
    <ContactEdit
      label={label}
      value={value}
      onSave={(value) => handleFieldSave(field, value)}
      onCancel={() => setEditingField(null)}
    />
  ) : (
    <ContactDetail
      label={label}
      value={value}
      onEdit={() => setEditingField(field)}
      title={title}
    />
  );
};

export default function ContactProfile() {
  const { id } = useParams();
  const { findContact, updateContact } = useContactStore();
  const contact = findContact(Number(id));

  const [editingField, setEditingField] = useState<keyof Contact | null>(null);

  if (!contact) {
    return <Title c="red">Contact not found.</Title>;
  }

  const handleFieldSave = (field: keyof typeof contact, value: string) => {
    updateContact(Number(id), { ...contact, [field]: value });
    setEditingField(null); // Exit edit mode
  };

  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Flex>
        <Container flex="1">
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
            <EditableField
              field="name"
              value={contact.name}
              editingField={editingField}
              setEditingField={setEditingField}
              handleFieldSave={handleFieldSave}
              title={true}
            />
          </Group>
          <Divider my="sm" />

          <Stack gap="lg">
            <EditableField
              field="company"
              label="Company"
              value={contact.company}
              editingField={editingField}
              setEditingField={setEditingField}
              handleFieldSave={handleFieldSave}
            />
            <EditableField
              field="title"
              label="Title"
              value={contact.title}
              editingField={editingField}
              setEditingField={setEditingField}
              handleFieldSave={handleFieldSave}
            />
            <EditableField
              field="phone"
              label="Phone Number"
              value={contact.phone}
              editingField={editingField}
              setEditingField={setEditingField}
              handleFieldSave={handleFieldSave}
            />
            <EditableField
              field="email"
              label="Email"
              value={contact.email}
              editingField={editingField}
              setEditingField={setEditingField}
              handleFieldSave={handleFieldSave}
            />
          </Stack>
        </Container>
      </Flex>
    </Card>
  );
}
