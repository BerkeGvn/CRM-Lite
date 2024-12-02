import { create } from 'zustand';
import { Contact, dummyContacts } from '../data/contacts';

type ContactStore = {
  contacts: Contact[];
  addContact: (newContact: Contact) => void;
  findContact: (id: number) => Contact | undefined;
};

const useContactStore = create<ContactStore>((set) => ({
  contacts: dummyContacts,
  addContact: (newContact: Contact) => {
    set((state) => ({
      contacts: [...state.contacts, newContact],
    }));
  },
  findContact: (id: number) => {
    return dummyContacts.find((contact) => contact.id === id);
  },
  // Add more functions as needed
}));

export default useContactStore;
