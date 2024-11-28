import { Container } from '@mantine/core';
import ContactList from '../components/contacts/ContactList';

export default function ContactsPage() {
  return (
    <section>
      <Container size="lg">
        <ContactList></ContactList>
      </Container>
    </section>
  );
}
