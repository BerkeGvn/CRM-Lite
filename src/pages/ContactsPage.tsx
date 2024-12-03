import { Container } from '@mantine/core';
import ContactList from '../components/contacts/ContactList';
import { Outlet } from 'react-router';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router';

export default function ContactsPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <section>
      <Container size="lg">
        <ContactList openModal={open}></ContactList>
        <Modal
          opened={opened}
          size={'xl'}
          onClose={() => {
            close();
            navigate(-1);
          }}
          c="dimmed"
          title="Contact Details"
        >
          <Outlet />
        </Modal>
      </Container>
    </section>
  );
}
