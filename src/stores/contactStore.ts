import { create } from 'zustand';
import { Contact, dummyContacts } from '../data/contacts';

type ContactStore = {
  contacts: Contact[];
  addContact: (newContact: Contact) => void;
};

const useContactStore = create<ContactStore>((set) => ({
  contacts: dummyContacts,
  addContact: (newContact: Contact) => {
    set((state) => ({
      contacts: [...state.contacts, newContact],
    }));
  },
}));

export default useContactStore;
